import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';

 const phoneNumbers = [
   '072-72 25 003',
   '070-54 88 152',
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
          Martin Lindberg,
          {' '}
          <Button variant="text" data-id="0" onClick={showPhoneNumber}>Visa nummer</Button>
        </li>
        <li>
          Linda Ökvist,
          {' '}
          <Button variant="text" data-id="1" onClick={showPhoneNumber}>Visa nummer</Button>
        </li>
      </Typography>

      <Typography variant="h5" component="h2" gutterBottom>
        Vägbeskrivning
      </Typography>
      <Typography variant="body1" paragraph>
        Se karta på <Link href="https://goo.gl/maps/zUkHZuHCanhmr5M16">Google Maps</Link>.
      </Typography>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1644.4491897130501!2d21.94611021639364!3d65.65931558430174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x467f66f89a13b185%3A0x7ace94ac86ede3a2!2sSundis%20konstgr%C3%A4splan!5e0!3m2!1sen!2sse!4v1650911020986!5m2!1sen!2sse"
        title="Vägbeskrivning Sundis"
        width="100%"
        height="450"
        style={{ border: 0, marginBottom: '10px' }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </Container>
  );
};

export default Info;
