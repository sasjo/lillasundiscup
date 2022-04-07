import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const phoneNumbers = [
  '070-180 02 45',
  '072-734 75 30',
];

const Info = () => {
  const showPhoneNumber = (e) => {
    const number = phoneNumbers[e.currentTarget.getAttribute('data-id')];
    e.currentTarget.innerHTML = `<a href="tel:+46${number.substring(1).replace(/-|\s/g, '')}">${number}</a>`
  }
  return (
    <Container sx={{mt: 2, mb: 2}} maxWidth="md">
      <Typography variant="h4" component="h1" gutterBottom>Information</Typography>

      <Typography variant="h5" component="h2" gutterBottom>
        Fikaförsäljning och aktiviteter
      </Typography>
      <Typography variant="body1" paragraph>
        Förutom att heja fram ungdomar som gör sin sista säsong som sjumannalag kan du köpa fika,
        vara med i olika aktiviteter och köpa lotter. Fotboll är roligare med publik och vi
        räknar med dig!
      </Typography>

      <Typography variant="h5" component="h2" gutterBottom>
        Sunda värderingar
      </Typography>
      <Typography variant="body1" paragraph>
        Vi som arrangerar vill att du som besöker oss tänker på att:
      </Typography>
      <Typography variant="body1" component="ul" gutterBottom>
        <li>barnidrott är lek och glädje</li>
        <li>barn inte är elitidrottare</li>
        <li>föräldrar hejar på alla</li>
        <li>domaren är mänsklig</li>
        <li>ledare oftast är ideella.</li>
      </Typography>
      <Typography variant="body1" paragraph>
        Domare under matcher är Sunderby SK:s nya domare som genomför praktik under handledning.
        Beröm domarna – de är modiga och behövs.
      </Typography>

      <Typography variant="h5" component="h2" gutterBottom>
        Frågor?
      </Typography>
      <Typography variant="body1" paragraph>
        besvaras av cupgeneraler:
      </Typography>
      <Typography variant="body1" component="ul" gutterBottom>
        <li>
          Nisse Nilsson,
          {' '}
          <Button variant="text" data-id="0" onClick={showPhoneNumber}>Visa nummer</Button>
        </li>
        <li>
          Martin Lindberg,
          {' '}
          <Button variant="text" data-id="0" onClick={showPhoneNumber}>Visa nummer</Button>
        </li>
      </Typography>
    </Container>
  );
};

export default Info;
