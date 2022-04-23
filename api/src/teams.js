const getSheetValues = require('./sheets-api');

const mapTeam = ([name]) => ({ name });

const sortFn = ([name1], [name2]) => name1.localeCompare(name2, 'sv');

const getTeams = async () => getSheetValues(['Flickor!M3:M', 'Pojkar!M3:M'])
  .then(([girls, boys]) => {
    return [
      {
        classifier: 'Flickor födda 2010',
        teams: girls.sort(sortFn).map(mapTeam),
      },
      {
        classifier: 'Pojkar födda 2010',
        teams: boys.sort(sortFn).map(mapTeam),
      },
    ];
  });

const getTeamsUsingGet = (req, res) => {
  getTeams().then((teams) => res.json(teams).end());
};

module.exports = {
  getTeams,
  getTeamsUsingGet,
};
