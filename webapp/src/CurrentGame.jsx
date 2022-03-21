import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import {gamesPropType} from './api';

const CurrentGame = ({ games }) => {
  const currentGames = games.flatMap(({games}) => games)
    .filter((game) => game.status === 'started');
  return (
    <List disablePadding>
      {currentGames.map((game, index) => (
        <ListItem disablePadding key={`game-${index}`}>
          <ListItemText>
            <Typography
              variant="caption"
              component="div"
            >
              Plan {game.field}
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
            {game.score && (
              <Typography variant="body2" component="div">
                {game.status === 'ended' ? 'Slutresultat' : 'Ställning'}
                {' '}
                {game.score}
              </Typography>
            )}
          </ListItemText>
        </ListItem>
      ))}
    </List>
  );
};

CurrentGame.propTypes = {
  games: PropTypes.arrayOf(gamesPropType).isRequired,
};

export default CurrentGame;
