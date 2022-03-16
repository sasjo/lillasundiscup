import React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

// TODO Must be loaded from server.
const mockData = [
  { startTime: '10:20', endTime:'11:00', field: '1', home: 'FC Norrsken', away: 'Gammelgårdens IF 1', status: 'pending' },
  { startTime: '10:20', endTime:'11:00', field: '2', home: 'Luleå SK', away: 'Gammelstads IF', status: 'pending' },
];

const NextGame = () => {
  return (
    <List disablePadding>
      {mockData.map((game, index) => (
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
          </ListItemText>
        </ListItem>
      ))}
    </List>
  );
};

export default NextGame;
