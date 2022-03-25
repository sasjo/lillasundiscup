const getSheetValues = require('./sheets-api');

const mapGame = (row, index, games) => {
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

  const startedIndex = 5;

  let status = 'pending';
  if (started === 'TRUE' && ended === 'TRUE') {
    status = 'ended';
  } else if (started === 'TRUE') {
    status = 'started';
  } else if (index <= 1) {
    // First two games are up next if not started or ended.
    status = 'next';
  } else if (games[index - 2][startedIndex] === 'TRUE') {
    // The previous game on this field is started. This means this game up next.
    status = 'next';
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

const getGames = async () => getSheetValues(['Flickor!A1:A1', 'Flickor!A4:I', 'Pojkar!A1:A1', 'Pojkar!A4:I'])
  .then(([girlsDate, girls, boysDate, boys]) => {
    const girlGames = girls.map(mapGame);
    const boyGames = boys.map(mapGame);

    // If next game exists for girls, it can't also exist for boys as they play the day after.
    if (girlGames.some(({ status }) => status === 'next')) {
      boyGames.forEach((game) => {
        if (game.status === 'next') {
          game.status = 'pending';
        }
      });
    }
    return [
      {
        date: girlsDate[0][0],
        games: girlGames,
      },
      {
        date: boysDate[0][0],
        games: boyGames,
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
