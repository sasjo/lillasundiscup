import React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

// TODO Must be loaded from server.
const mockData = [
  { startTime: '09.40', endTime:'10.20', field: '1', home: 'IFK Luleå', away: 'Sävast AIF', status: 'started', result: '0 - 0' },
  { startTime: '09.40', endTime:'10.20', field: '2', home: 'Alviks IK', away: 'Lira BK 2', status: 'started', result: '1 - 0' },
];

const CurrentGame = () => {
  return (
    <List disablePadding>
      {mockData.map((game, index) => (
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
              {game.home}
            </Typography>
            <Typography variant="body2" component="span">{' - '}</Typography>
            <Typography
              variant="body2"
              noWrap
              component="span"
            >
              {game.away}
            </Typography>
            {game.result && (
              <Typography variant="body2" component="div">
                {game.status === 'ended' ? 'Slutresultat' : 'Ställning'}
                {' '}
                {game.result}
              </Typography>
            )}
          </ListItemText>
        </ListItem>
      ))}
    </List>
  );
};

export default CurrentGame;
