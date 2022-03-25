import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import sskLogo from './ssk.svg';
import GameWidget from './GameWidget';
import CurrentGame from './CurrentGame';
import NextGame from './NextGame';
import TeamWidget from './TeamWidget';
import WebSponsors from './sponsors/WebSponsors';
import Box from '@mui/material/Box';

const Home = () => {

  const widgetCss = {
    height: '100%',
  };

  return (
    // https://images.unsplash.com/photo-1551958219-acbc608c6377?auto=format&fit=crop&w=2070
    // https://unsplash.com/photos/1551958219-acbc608c6377
    <>
      <Container maxWidth="md">
        <Box>
          <img src={sskLogo} alt="Sunderby SK" style={{ height: '25vmin', pointerEvents: 'none', display: 'block', margin: '10px auto' }} />
          <Typography variant="h4" component="h1" gutterBottom>
            Lilla Sundis Cup 2022
          </Typography>
          <Typography variant="body1" paragraph>
            Lilla Sundis Cup är en fotbollscup som spelas 14-15 Maj 2022 i Södra Sunderbyn.
          </Typography>
        </Box>

        <Grid container spacing={2} columns={{xs: 4, md: 12}}>
          <Grid item xs={4} md={4}>
            <Paper variant="outlined" sx={widgetCss}>
            <Typography color="text.secondary" align="center">Nu spelar</Typography>
            <GameWidget component={CurrentGame}/>
            </Paper>
          </Grid>
          <Grid item xs={4} md={4}>
            <Paper variant="outlined" sx={widgetCss}>
            <Typography color="text.secondary" align="center">Nästa match</Typography>
            <GameWidget component={NextGame}/>
            </Paper>
          </Grid>
          <Grid item xs={4} md={4}>
            <Paper variant="outlined" sx={widgetCss}>
            <Typography color="text.secondary" align="center">Antal lag</Typography>
            <TeamWidget/>
            </Paper>
          </Grid>
        </Grid>
      </Container>
      <WebSponsors/>
    </>
  );
};

export default Home;
