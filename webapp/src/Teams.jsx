import React from 'react';
import Container from '@mui/material/Container';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { useQuery } from 'react-query';
import { getTeams } from './api';
import Alert from '@mui/material/Alert';
import lang from './strings';

const Teams = () => {
  const { isLoading, isError, data } = useQuery('teams', getTeams);

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
      { isLoading ? (
        <LinearProgress sx={{ marginTop: '10px' }} />
      ) : (
        <Grid container spacing={2} columns={{xs: 4, md: 12}}>
          {data.map(({classifier, teams}) => (
            <Grid key={classifier} item xs={4} md={6}>
              <Typography variant="h5" component="h2">
                {classifier}
              </Typography>
              <List>
                {teams.map((team, index) => (
                  <ListItem key={`team${index}`} disablePadding>
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
