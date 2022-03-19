import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { useQuery } from 'react-query';
import { getTeams } from './api';

const Teams = () => {
  const { isLoading, isError, data, error } = useQuery('teams', getTeams);

  if (isLoading) {
    // TODO Make pretty
    return <>Loading...</>
  }

  if (isError) {
    // TODO Make prettier
    return <>{error}</>
  }

  return (
    <Container sx={{mt: 2, mb: 2}} maxWidth="md">
      <Typography variant="h4" component="h1">Lag</Typography>
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
    </Container>
  )
};

export default Teams;
