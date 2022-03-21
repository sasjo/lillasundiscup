import React from 'react';
import {useQuery} from 'react-query';
import LinearProgress from '@mui/material/LinearProgress';
import Alert from '@mui/material/Alert';
import {getTeams} from './api';
import lang from './strings';
import Typography from '@mui/material/Typography';

const TeamWidget = () => {
  const { isLoading, isError, data: teams } = useQuery('teams', getTeams);

  if (isLoading) {
    return <LinearProgress sx={{ marginTop: '10px' }} />;
  }

  if (isError) {
    return (
      <Alert severity="error">
        {lang('error.teams')}
      </Alert>
    );
  }

  const numTeams = teams.flatMap(({ teams }) => teams).length || 0;

  return (
    <Typography variant="h1" component="p" align="center">
      {numTeams}
    </Typography>
  );
}

export default TeamWidget;
