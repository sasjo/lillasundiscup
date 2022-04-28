import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import sskLogo from './ssk.svg';
import sponsorLogo from './pionjaren.svg';
import GameWidget from './GameWidget';
import CurrentGame from './CurrentGame';
import NextGame from './NextGame';
import TeamWidget from './TeamWidget';
import WebSponsors from './sponsors/WebSponsors';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack'
import {useNavigate} from 'react-router-dom';

const Home = () => {

  const widgetCss = {
    height: '100%',
    cursor: 'pointer',
  };

  const navigate = useNavigate();

  return (
    <>
      <Container maxWidth="md">
        <Box>
          <img src={sponsorLogo} alt="Pionjären" style={{ width: '100%', maxHeight: '150px', pointerEvents: 'none', display: 'block', margin: '10px auto' }} />
          <Typography variant="h3" component="h1" align="center">
            Lilla Sundis Cup 2022
          </Typography>
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={4}
          >
            <Typography variant="body1" align="right">
              Flickor 14 maj
            </Typography>
            <Typography variant="body1" align="left">
              Pojkar 15 maj
            </Typography>
          </Stack>
          <img src={sskLogo} alt="Sunderby SK" style={{ height: '20vmin', maxHeight: '100px', pointerEvents: 'none', display: 'block', margin: '10px auto' }} />

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
            <Paper variant="outlined" sx={widgetCss} onClick={() => navigate('/matcher.html')}>
            <Typography color="text.secondary" align="center">Nu spelar</Typography>
            <GameWidget component={CurrentGame}/>
            </Paper>
          </Grid>
          <Grid item xs={4} md={4}>
            <Paper variant="outlined" sx={widgetCss} onClick={() => navigate('/matcher.html')}>
            <Typography color="text.secondary" align="center">Nästa match</Typography>
            <GameWidget component={NextGame}/>
            </Paper>
          </Grid>
          <Grid item xs={4} md={4}>
            <Paper variant="outlined" sx={widgetCss} onClick={() => navigate('/lag.html')}>
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
