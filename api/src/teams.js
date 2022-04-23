const getSheetValues = require('./sheets-api');

const mapTeam = ([name]) => ({ name });

const sortFn = ([name1], [name2]) => name1.localeCompare(name2, 'sv');

const getTeams = async () => getSheetValues(['Flickor!M1:M1', 'Flickor!M3:M', 'Pojkar!M1:M1', 'Pojkar!M3:M'])
  .then(([[girlsClass], girls, [boysClass], boys]) => {
    return [
      {
        classifier: girlsClass,
        teams: girls.sort(sortFn).map(mapTeam),
      },
      {
        classifier: boysClass,
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
