import axios from 'axios';
import PropTypes from 'prop-types';

export const gamesPropType = PropTypes.shape({
  date: PropTypes.string.isRequired,
  games: PropTypes.arrayOf(PropTypes.shape({
    startTime: PropTypes.string.isRequired,
    endTime: PropTypes.string.isRequired,
    field: PropTypes.string.isRequired,
    homeTeam: PropTypes.string.isRequired,
    awayTeam: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
  })).isRequired,
});

export const getGames = async () => axios.get('/api/v1/games')
  .then((response) => response.data);

export const getTeams = async () => axios.get('/api/v1/teams')
  .then((response) => response.data);
