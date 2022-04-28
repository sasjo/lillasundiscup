import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import sponsors from './sponsors/sponsor-data.json';

const Sponsors = () => {

  const allSponsors = [
    sponsors.main.name,
    ...sponsors.home.map(({ name }) => name),
    ...sponsors.web.map(({ name }) => name),
    ...sponsors.nonwebb,
    ...sponsors.small,
  ].sort();

  return (
    <Container sx={{mt: 2, mb: 2}} maxWidth="md">
      <Typography variant="h4" component="h1" gutterBottom>Sponsorer</Typography>

      <Typography variant="body1" paragraph>
        Vi vill rikta ett stort tack till våra sponsorer!
      </Typography>

      <Typography variant="body1" component="ul" gutterBottom>
        {allSponsors.map((name, index) => (
          <li key={`sponsor-${index}`}>{name}</li>
        ))}
      </Typography>
    </Container>
  )
};

export default Sponsors;
