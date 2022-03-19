const getSheetValues = require('./sheets-api');

const mapGame = (row) => {
  const [
    startTime,
    endTime,
    field,
    homeTeam,
    awayTeam,
    started,
    ended,
    homeGoals,
    awayGoals,
  ] = row;

  let status = 'pending';
  if (started === 'TRUE' && ended === 'TRUE') {
    status = 'ended';
  } else if (started === 'TRUE') {
    status = 'started';
  }

  return {
    startTime,
    endTime,
    field,
    homeTeam,
    awayTeam,
    status,
    score: `${Number(homeGoals) || 0} - ${Number(awayGoals) || 0}`,
  };
};

const getGames = async () => getSheetValues(['Flickor!A4:I', 'Pojkar!A4:I',])
  .then(([girls, boys]) => {
    return [
      {
        classifier: 'Flickor födda 2008',
        games: girls.map(mapGame),
      },
      {
        classifier: 'Pojkar födda 2008',
        games: boys.map(mapGame),
      }
    ];
  });

const getGamesUsingGet = (req, res) => {
  getGames().then((games) => res.json(games).end());
};

module.exports = {
  getGames,
  getGamesUsingGet,
};
