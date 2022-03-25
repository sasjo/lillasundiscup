import React, {useState} from 'react';
import Container from '@mui/material/Container';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableRow from '@mui/material/TableRow';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import theme from './theme';
import {useQuery} from 'react-query';
import {getGames} from './api';
import Alert from '@mui/material/Alert';
import LinearProgress from '@mui/material/LinearProgress';
import lang from './strings';

const GameSchedule = () => {
  const [highlightTeam, setHighlightTeam] = useState('');
  const [hideEndedGames, setHideEndedGames] = useState(true);

  const {isLoading, isError, data} = useQuery('games', getGames);

  const gameCssStyle = ({homeTeam, awayTeam, status}, dayIndex) => {
    const styles = {};
    if (status === 'ended') {
      styles['> td'] = {color: theme.palette.action.disabled};
      if (hideEndedGames) {
        styles.display = 'none';
      }
    }
    if (status === 'started') {
      styles['> td'] = {color: theme.palette.secondary.dark};
    }
    if ([`${dayIndex}-${homeTeam}`, `${dayIndex}-${awayTeam}`].includes(highlightTeam)) {
      styles.backgroundColor = theme.palette.grey['200'];
    }
    return styles;
  }

  const teamCssStyle = (team) => {
    const styles = {cursor: 'pointer'};
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

  const onSwitchChange = ({currentTarget: {checked}}) => {
    setHideEndedGames(!checked);
  };

  if (isError) {
    return (
      <Container sx={{mt: 2, mb: 2}} maxWidth="md">
        <Typography variant="h4" component="h1" gutterBottom>Spelschema</Typography>
        <Alert severity="error">
          {lang('error.games')}
        </Alert>
      </Container>
    );
  }

  const showEndedDefaultValue = data ? !data.some(({games}) => games.some((game) => game.status !== 'ended')) : true;

  const dateFormat =(date) => date.charAt(0).toUpperCase() + date.slice(1);

  return (
    <Container sx={{mt: 2, mb: 2}} maxWidth="md">
      <Typography variant="h4" component="h1" gutterBottom>Spelschema</Typography>

      {isLoading ? (
        <LinearProgress sx={{ marginTop: '10px' }} />
      ) :(
      <>
        <Typography variant="body1" paragraph>
          Peka på ett lagnamn för att markera deras matcher.
        </Typography>

        <Typography variant="body1" component="ul" gutterBottom>
            {data.map(({date}, index) => (
              <li key={`day-${index}`}><a href={`#day-${index + 1}`}>{dateFormat(date)}</a></li>
            ))}
        </Typography>

        <FormControlLabel
          control={<Switch defaultChecked={showEndedDefaultValue}/>}
          label="Visa avslutade matcher"
          onChange={onSwitchChange}
        />

        {data.map(({date, games}, index) => (
          <React.Fragment key={date}>
            <Typography id={`day-${index + 1}`} variant="h6" sx={{ mt: '20px' }}>{dateFormat(date)}</Typography>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Tid</TableCell>
                    <TableCell>Match</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {games.map((game, gameIndex) => (
                    <TableRow key={`game-${gameIndex}`} sx={gameCssStyle(game, index)}>
                      <TableCell>
                        <Typography variant="body2" noWrap>{game.startTime}</Typography>
                        <Typography variant="body2" noWrap>Plan {game.field}</Typography>
                      </TableCell>
                      <TableCell>
                        <Typography
                          variant="body2"
                          noWrap
                          component="span"
                          sx={teamCssStyle(`${index}-${game.homeTeam}`)}
                          onClick={onHighlightTeam}
                          data-team={`${index}-${game.homeTeam}`}
                        >
                          {game.homeTeam}
                        </Typography>
                        <Typography variant="body2" component="span">{' - '}</Typography>
                        <Typography
                          variant="body2"
                          noWrap
                          component="span"
                          sx={teamCssStyle(`${index}-${game.awayTeam}`)}
                          onClick={onHighlightTeam}
                          data-team={`${index}-${game.awayTeam}`}
                        >
                          {game.awayTeam}
                        </Typography>
                        {game.score && (
                          <Grid container direction="row" alignItems="center">
                            {game.status === 'started' && (
                              <Grid item>
                                <SportsSoccerIcon fontSize="small" color="secondary"/>
                              </Grid>
                            )}
                            <Grid item>
                              <Typography variant="caption" component="div">
                                {game.status === 'ended' ? 'Slutresultat' : 'Ställning'}
                                {' '}
                                {game.score}
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
          </React.Fragment>
        ))}
      </>)}
    </Container>
  );
};

export default GameSchedule;
