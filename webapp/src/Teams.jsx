import React from 'react';
import Container from '@mui/material/Container';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ListItemText from '@mui/material/ListItemText';
import {useQuery} from 'react-query';
import {getTeams} from './api';
import Alert from '@mui/material/Alert';
import lang from './strings';

const clubMappings = {
  'alvik.jpeg': /Alviks? IK/,
  'baik.jpeg': /(Bergnäsets AIK|BAIK)/,
  'gammelgardens_if.jpeg': /Gammelgården(s IF)?/,
  'gammelstads_if.jpeg': /(Gammelstad(s IF)?|GIF)/,
  'heden.jpeg': /Hedens IF/,
  'lira.jpeg': /Lira BK/,
  'lulea_sk.jpeg': /Luleå (Sportklubb|SK)/,
  'notviken.jpeg': /Notvikens? IK/,
  'overkalix.jpeg': /Överkalix IF/,
  'rutvik.jpeg': /Rutvik/,
  'savast.jpeg': /Sävast/,
  'sunderbysk.jpeg': /Sunderby|SSK/,
  'svartbjornsbyn.jpeg': /Svartbjörnsbyn/,
};

const clubAvatar = (name) => {
  for (const icon in clubMappings) {
    if (clubMappings[icon].test(name)) {
      return (
        <Avatar
          alt={name}
          src={`/images/clubs/${icon}`}
        />
      )
    }
  }
  return (
    <Avatar>{name.charAt(0)}</Avatar>
  )
}

const Teams = () => {
  const {isLoading, isError, data} = useQuery('teams', getTeams);

  if (isError) {
    return (
      <Container sx={{mt: 2, mb: 2}} maxWidth="md">
        <Typography variant="h4" component="h1" gutterBottom>Lag</Typography>
        <Alert severity="error">
          {lang('error.teams')}
        </Alert>
      </Container>
    );
  }

  return (
    <Container sx={{mt: 2, mb: 2}} maxWidth="md">
      <Typography variant="h4" component="h1" gutterBottom>Lag</Typography>
      {isLoading ? (
        <LinearProgress sx={{marginTop: '10px'}}/>
      ) : (
        <Grid container spacing={2} columns={{xs: 4, md: 12}}>
          {data.map(({classifier, teams}) => (
            <Grid key={classifier} item xs={4} md={6}>
              <Typography variant="h5" component="h2">
                {classifier}
              </Typography>
              <List>
                {teams.map((team, index) => (
                  <ListItem key={`team${index}`}>
                    <ListItemAvatar>
                      {clubAvatar(team.name)}
                    </ListItemAvatar>
                    <ListItemText primary={team.name}/>
                  </ListItem>
                ))}
              </List>
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  )
};

export default Teams;
