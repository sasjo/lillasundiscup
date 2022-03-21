import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import theme from './theme';
import GameWidget from './GameWidget';
import CurrentGame from './CurrentGame';
import NextGame from './NextGame';
import TeamWidget from './TeamWidget';
import WebSponsors from './sponsors/WebSponsors';

const Home = () => {
  return (
    // https://images.unsplash.com/photo-1551958219-acbc608c6377?auto=format&fit=crop&w=2070
    // https://unsplash.com/photos/1551958219-acbc608c6377
    <Container sx={{mt: 2, mb: 2}} maxWidth="md">
      <Typography variant="h4" component="h1" gutterBottom>
        Lilla Sundis Cup 2022
      </Typography>
      <Typography variant="body1" paragraph>
        Lilla Sundis Cup är en fotbollscup som spelas 14-15 Maj 2022 i Södra Sunderbyn.
      </Typography>

      <Grid container spacing={4} columns={{xs: 4, md: 12}}>
        <Grid item xs={4} md={4}>
          <Typography color="text.secondary" align="center">Nu spelar</Typography>
          <GameWidget component={CurrentGame}/>
        </Grid>
        <Grid item xs={4} md={4}>
          <Typography color="text.secondary" align="center">Nästa match</Typography>
          <GameWidget component={NextGame}/>
        </Grid>
        <Grid item xs={4} md={4}>
          <Typography color="text.secondary" align="center">Antal lag</Typography>
          <TeamWidget/>
        </Grid>
      </Grid>
      <WebSponsors/>
    </Container>
  );
};

export default Home;
