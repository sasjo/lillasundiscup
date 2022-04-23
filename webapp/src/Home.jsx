import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import cupLogo from './cuplogo.svg';
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
    <>
      <Container maxWidth="md">
        <Box>
          <img src={cupLogo} alt="Pionjären Lilla Sundis Cup" style={{ width: '100%', pointerEvents: 'none', display: 'block', margin: '10px auto' }} />
          <Typography variant="h5" component="h2">
            24:e gången – visst kommer du?
          </Typography>
          <Typography variant="body1" paragraph>
            Pionjären Lilla Sundis Cup är tillbaka. För 24:e gången arrangerar Sunderby SK fotbollscup.
            Efter två Coronapräglade säsonger med inställda fotbollsevent är vi mer taggade än någonsin.
          </Typography>
          <Typography variant="h5" component="h2">
            Deltagande lag och spelschema
          </Typography>
          <Typography variant="body1" paragraph>
            I år deltar flick- och pojklag där spelarna är födda 2010. Nyfiken på vilka lag som spelar?
            Se fliken lag. Cupen spelas lördag 14 maj samt söndag 15 maj på Sundis konstgräsplan.
            Spelschema finner du under fliken matcher.
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
