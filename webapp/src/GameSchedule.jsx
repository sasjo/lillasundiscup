import React, {useState} from 'react';
import Container from '@mui/material/Container';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableRow from '@mui/material/TableRow';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import { DataGrid } from '@mui/x-data-grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import LooksOneIcon from '@mui/icons-material/LooksOne';
import LooksTwoIcon from '@mui/icons-material/LooksTwo';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import theme from './theme';

// Set ongoing/done in server? Probably makes sense.
// This data should be read from a google sheet ideally. That would be easy to update on the run.

const mockData = [
  { startTime: '09:00', endTime:'09:40', field: '1', home: 'Sunderby SK', away: 'Lira BK 1', result: '1 - 0', status: 'ended' },
  { startTime: '09:00', endTime:'09:40', field: '2', home: 'Gammelgårdens IF 2', away: 'Rutvik SK', result: '3 - 7', status: 'ended' },
  { startTime: '09:40', endTime:'10:20', field: '1', home: 'IFK Luleå', away: 'Sävast AIF', status: 'started', result: '0 - 0' },
  { startTime: '09:40', endTime:'10:20', field: '2', home: 'Alviks IK', away: 'Lira BK 2', status: 'started', result: '1 - 0' },
  { startTime: '10:20', endTime:'11:00', field: '1', home: 'FC Norrsken', away: 'Gammelgårdens IF 1', status: 'pending' },
  { startTime: '10:20', endTime:'11:00', field: '2', home: 'Luleå SK', away: 'Gammelstads IF', status: 'pending' },
  { startTime: '11:00', endTime:'11:40', field: '1', home: 'Trångfors IF', away: 'Sunderby SK', status: 'pending' },
  { startTime: '11:00', endTime:'11:40', field: '2', home: 'Lira BK 1', away: 'Gammelgårdens IF 2', status: 'pending' },
  { startTime: '11:40', endTime:'12:20', field: '1', home: 'Rutvik SK', away: 'IFK Luleå', status: 'pending' },
  { startTime: '11:40', endTime:'12:20', field: '2', home: 'Sävast AIF', away: 'Alviks IK', status: 'pending' },
];

const GameSchedule = () => {
  const [highlightTeam, setHighlightTeam] = useState('');
  const [hideEndedGames, setHideEndedGames] = useState(true);

  // We should do this on the server API...
  const grouped = mockData.reduce((result, currentValue) => {
    const { startTime } = currentValue;
    if (!result[startTime]) {
      result[startTime] = [];
    }
    result[startTime].push(currentValue);
    return result;
  }, {});

  const gameCssStyle = ({ home, away, status }) => {
    const styles = {};
    if (status === 'ended') {
      styles['> td'] = { color: theme.palette.action.disabled };
      if (hideEndedGames) {
        styles.display = 'none';
      }
    }
    if (status === 'started') {
      styles['> td'] = { color: theme.palette.secondary.dark };
    }
    if ([home, away].includes(highlightTeam)) {
      styles.backgroundColor = theme.palette.grey['200'];
    }
    return styles;
  }

  const teamCssStyle = (team) => {
    const styles = { cursor: 'pointer' };
    if (team === highlightTeam) {
      styles.color = theme.palette.secondary.contrastText;
      styles.backgroundColor = theme.palette.secondary.main;
      styles.borderRadius = '.2em';
    }
    return styles;
  };

  const onHighlightTeam = (event) => {
    const team = event.currentTarget.getAttribute('data-team');
    setHighlightTeam(team === highlightTeam ? '' : team);
  };

  const onSwitchChange = ({ currentTarget: { checked }}) => {
    setHideEndedGames(checked);
  };

  return (
    <Container sx={{mt: 2, mb: 2 }} maxWidth="md">

      {/*<Typography variant="h4">Spelschema</Typography>*/}
      {/*<Typography variant="h6">Lördag 14 Maj 2022</Typography>*/}

      {/*{Object.keys(grouped).map((time) => (*/}
      {/*  <>*/}
      {/*    <Typography variant="h6">*/}
      {/*      {time}*/}
      {/*    </Typography>*/}
      {/*    <List>*/}
      {/*    {grouped[time].map((game) => (*/}
      {/*        <ListItem disablePadding>*/}
      {/*          <ListItemText secondary="test">*/}
      {/*            <Typography noWrap component="span">{game.home}</Typography>*/}
      {/*            <Typography component="span">{' - '}</Typography>*/}
      {/*            <Typography noWrap component="span">{game.away}</Typography>*/}
      {/*          </ListItemText>*/}
      {/*        </ListItem>*/}
      {/*    ))}*/}
      {/*    </List>*/}
      {/*  </>*/}
      {/*))}*/}


      {/*<Typography variant="h6">*/}
      {/*  11.00 - 11.40*/}
      {/*</Typography>*/}
      {/*<List>*/}
      {/*  <ListItem disablePadding>*/}
      {/*    <ListItemIcon>*/}
      {/*      <LooksOneIcon aria-label="Plan 1"/>*/}
      {/*    </ListItemIcon>*/}
      {/*    <ListItemText*/}
      {/*      primary="Sunderby SK Blå - Lira Gul"*/}
      {/*      secondary="Plan 1, 11.00 - 11.40"*/}
      {/*    />*/}
      {/*  </ListItem>*/}
      {/*  <ListItem disablePadding>*/}
      {/*    <ListItemIcon>*/}
      {/*      <LooksTwoIcon aria-label="Plan 2" />*/}
      {/*    </ListItemIcon>*/}
      {/*    <ListItemText*/}
      {/*      primary="Sunderby SK Gul - Lira Blå"*/}
      {/*      secondary="Plan 2, 11.00 - 11.40"*/}
      {/*    />*/}
      {/*  </ListItem>*/}
      {/*</List>*/}

      <Typography variant="h4" component="h1">Spelschema</Typography>
      <Typography variant="body1" paragraph>
        Peka på ett lagnamn för att markera deras matcher.
      </Typography>

      <Typography variant="h6">Lördag 14 Maj 2022</Typography>

      <FormControlLabel
        control={<Switch defaultChecked={mockData.some((game) => game.status !== 'ended')}/>}
        label="Dölj avslutade matcher"
        onChange={onSwitchChange}
      />

      <TableContainer component={Paper} >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Tid</TableCell>
              <TableCell>Match</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {mockData.map((game, index) => (
              <TableRow key={`game-${index}`} sx={gameCssStyle(game)}>
                <TableCell>
                  <Typography variant="body2" noWrap>{game.startTime}</Typography>
                  <Typography variant="body2" noWrap>Plan {game.field}</Typography>
                </TableCell>
                <TableCell>
                  <Typography
                    variant="body2"
                    noWrap
                    component="span"
                    sx={teamCssStyle(game.home)}
                    onClick={onHighlightTeam}
                    data-team={game.home}
                  >
                    {game.home}
                  </Typography>
                  <Typography variant="body2" component="span">{' - '}</Typography>
                  <Typography
                    variant="body2"
                    noWrap
                    component="span"
                    sx={teamCssStyle(game.away)}
                    onClick={onHighlightTeam}
                    data-team={game.away}
                  >
                    {game.away}
                  </Typography>
                  {game.result && (
                    <Grid container direction="row" alignItems="center">
                      {game.status === 'started' && (
                        <Grid item>
                          <SportsSoccerIcon fontSize="small" color="secondary" />
                        </Grid>
                      )}
                      <Grid item>
                        <Typography variant="caption" component="div">
                          {game.status === 'ended' ? 'Slutresultat' : 'Ställning'}
                          {' '}
                          {game.result}
                        </Typography>
                      </Grid>
                    </Grid>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default GameSchedule;
