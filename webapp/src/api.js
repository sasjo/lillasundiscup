const axios = require('axios');

const getGames = async () => axios.get('/api/v1/games')
  .then((response) => response.data);

const getTeams = async () => axios.get('/api/v1/teams')
  .then((response) => response.data);

module.exports = {
  getGames,
  getTeams,
};
