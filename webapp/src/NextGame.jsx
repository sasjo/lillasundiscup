import React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import PropTypes from 'prop-types';
import {gamesPropType} from './api';

const NextGame = ({ games }) => {
  const nextGames = games.flatMap(({games}) => games)
    .filter((game) => game.status === 'next');

  return (
    <List disablePadding>
      {nextGames.map((game, index) => (
        <ListItem disablePadding key={`game-${index}`}>
          <ListItemText>
            <Typography
              variant="caption"
              component="div"
            >
              {game.startTime}, Plan {game.field}
            </Typography>
            <Typography
              variant="body2"
              noWrap
              component="span"
            >
              {game.homeTeam}
            </Typography>
            <Typography variant="body2" component="span">{' - '}</Typography>
            <Typography
              variant="body2"
              noWrap
              component="span"
            >
              {game.awayTeam}
            </Typography>
          </ListItemText>
        </ListItem>
      ))}
    </List>
  );
};

NextGame.propTypes = {
  games: PropTypes.arrayOf(gamesPropType).isRequired,
};

export default NextGame;
