import React from 'react';
import PropTypes from 'prop-types';
import {useQuery} from 'react-query';
import LinearProgress from '@mui/material/LinearProgress';
import Alert from '@mui/material/Alert';
import {getGames} from './api';
import lang from './strings';

const GameWidget = ({ component }) => {
  const { isLoading, isError, data: games } = useQuery('games', getGames);

  if (isLoading) {
    return <LinearProgress sx={{ marginTop: '10px' }} />;
  }

  if (isError) {
    return (
      <Alert severity="error">
        {lang('error.games')}
      </Alert>
    );
  }
  return React.createElement(component, { games });
};

GameWidget.propTypes = {
  component: PropTypes.func.isRequired,
};

export default GameWidget;
