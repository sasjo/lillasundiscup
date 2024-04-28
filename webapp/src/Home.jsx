import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
// import Grid from '@mui/material/Grid';
// import Paper from '@mui/material/Paper';
import sskLogo from './ssk.svg';
// import sponsorLogo from './pionjaren.svg';
// import GameWidget from './GameWidget';
// import CurrentGame from './CurrentGame';
// import NextGame from './NextGame';
// import TeamWidget from './TeamWidget';
// import WebSponsors from './sponsors/WebSponsors';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack'
// import {useNavigate} from 'react-router-dom';
//import Link from '@mui/material/Link';

const Home = () => {

  // const widgetCss = {
  //   height: '100%',
  //   cursor: 'pointer',
  // };

  // const navigate = useNavigate();

  return (
    <>
      <Container maxWidth="md">
        <Box>
          {/*<img src={sponsorLogo} alt="Pionjären" style={{ width: '100%', maxHeight: '150px', pointerEvents: 'none', display: 'block', margin: '10px auto' }} />*/}
          <Typography variant="h3" component="h1" marginTop="20px" align="center">
            Lilla Sundis Cup 2024
          </Typography>
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={4}
          >
            <Typography variant="body1" align="right">
              Flickor 11 maj
            </Typography>
            <Typography variant="body1" align="left">
              Pojkar 12 maj
            </Typography>
          </Stack>
          <img src={sskLogo} alt="Sunderby SK" style={{ height: '20vmin', maxHeight: '100px', pointerEvents: 'none', display: 'block', margin: '10px auto' }} />

          <Typography variant="h5" component="h2">
            25:e gången – visst kommer du?
          </Typography>
          <Typography variant="body1" paragraph>
            Lilla Sundis Cup är tillbaka. För 25:e gången arrangerar Sunderby SK fotbollscup.

          </Typography>
          <Typography variant="h5" component="h2">
            Deltagande lag och spelschema
          </Typography>
          <Typography variant="body1" paragraph>
            I år deltar flick- och pojklag där spelarna är födda 2012.
            Spelformen på cupen är 7 mot 7, stor plan (ca 55x35 m).
            SvFF:s bestämmelser för barn och ungdomsidrott gäller.
          </Typography>
          <Typography variant="body1" paragraph>
            Mer information och anmälan via formuläret:
          </Typography>
          <Typography variant="body1" paragraph fontWeight="bold">
			Välkomna till Lilla Sundis Cup 2024!
          </Typography>
		  <Typography variant="body1" paragraph>
			Följande lag är anmälda, sex lag med pojkar och sex lag med flickor.
          </Typography>
		    <Typography variant="body1" paragraph fontWeight="bold">
			Flickor – spelar den 11 maj:
          </Typography>
		  <Typography variant="body1" paragraph>
			<div>
			Notvikens IK (gul)
			</div>
			<div>
			Gammelstads IF (grön/vit)
			</div>
			<div>
			Sävast AIF (röd/?)
			</div>
			<div>
			Bergnäsets AIK (vit) två lag
			</div>
			<div>
			Sunderby SK Flickor (gul/blå)
			</div>
          </Typography>
		 
		 <Typography variant="body1" paragraph fontWeight="bold">
			Pojkar – spelar den 12 maj:
          </Typography>
		  <Typography variant="body1" paragraph>
			<div>
			Gammelgården IF (rött)
			</div>
			<div>
			Sunderby SK (gul/blå)
			</div>
			<div>
			Gammelstads IF (grön/vit) två lag
			</div>
			<div>
			Lira BK (blå/gul) två lag
			</div>
		   </Typography>
		   <Typography variant="body1" paragraph>
			För att kolla möjligheten till sen anmälan, maila
			<a href="mailto:sunderbyskf2012@gmail.com?body=Efteranmälan"> <b>sunderbyskf2012@gmail.com</b></a>
		   </Typography>
        </Box>

        {/*<Grid container spacing={2} columns={{xs: 4, md: 12}}>*/}
        {/*  <Grid item xs={4} md={4}>*/}
        {/*    <Paper variant="outlined" sx={widgetCss} onClick={() => navigate('/matcher.html')}>*/}
        {/*    <Typography color="text.secondary" align="center">Nu spelar</Typography>*/}
        {/*    <GameWidget component={CurrentGame}/>*/}
        {/*    </Paper>*/}
        {/*  </Grid>*/}
        {/*  <Grid item xs={4} md={4}>*/}
        {/*    <Paper variant="outlined" sx={widgetCss} onClick={() => navigate('/matcher.html')}>*/}
        {/*    <Typography color="text.secondary" align="center">Nästa match</Typography>*/}
        {/*    <GameWidget component={NextGame}/>*/}
        {/*    </Paper>*/}
        {/*  </Grid>*/}
        {/*  <Grid item xs={4} md={4}>*/}
        {/*    <Paper variant="outlined" sx={widgetCss} onClick={() => navigate('/lag.html')}>*/}
        {/*    <Typography color="text.secondary" align="center">Antal lag</Typography>*/}
        {/*    <TeamWidget/>*/}
        {/*    </Paper>*/}
        {/*  </Grid>*/}
        {/*</Grid>*/}
      </Container>
      {/*<WebSponsors/>*/}
    </>
  );
};

export default Home;
