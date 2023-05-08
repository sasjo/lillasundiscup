import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import sponsors from './sponsors/sponsor-data.json';
import distinctSponsors from './sponsors/distinct-sponsors';

const Sponsors = () => {

  const mapFn = ({ name }) => name;

  const allSponsors = distinctSponsors([
    sponsors.main.name,
    ...sponsors.home.map(mapFn),
    ...sponsors.field.map(mapFn),
    ...sponsors.web.map(mapFn),
    ...sponsors.tshirt.map(mapFn),
    ...sponsors.footballs.map(mapFn),
    ...sponsors.small,
  ].sort());

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
