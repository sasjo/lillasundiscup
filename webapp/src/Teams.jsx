import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const teamsData = [{
  classifier: 'Flickor födda 2008',
  teams: [
    'Sunderby SK',
    'IFK Luleå',
    'Lira BK',
    'Gammelgårdens IF 1',
    'Gammelgårdens IF 2',
  ],
}, {
  classifier: 'Pojkar födda 2008',
  teams: [
    'Sunderby SK',
    'IFK Luleå',
    'Lira BK',
    'Gammelgårdens IF 1',
    'Gammelgårdens IF 2',
  ],
}];

const Teams = () => (
  <Container sx={{mt: 2, mb: 2}} maxWidth="md">
    <Typography variant="h4" component="h1">Lag</Typography>
    <Grid container spacing={2} columns={{xs: 4, md: 12}}>
      {teamsData.map(({classifier, teams}) => (
        <Grid key={classifier} item xs={4} md={6}>
          <Typography variant="h5" component="h2">
            {classifier}
          </Typography>
          <List>
            {teams.map((team, index) => (
              <ListItem key={`team${index}`} disablePadding>
                <ListItemText primary={team} />
              </ListItem>
            ))}
          </List>
        </Grid>
      ))}
    </Grid>
  </Container>
);

export default Teams;
