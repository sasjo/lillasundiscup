import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';

const Copyright = () => {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://lillasundiscup.se/">
        Lilla Sundis Cup
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const Footer = () => (
  <Box
    component="footer"
    sx={{
      py: 3,
      px: 2,
      mt: 'auto',
      backgroundColor: (theme) =>
        theme.palette.mode === 'light'
          ? theme.palette.grey[200]
          : theme.palette.grey[800],
    }}
  >
    <Container maxWidth="md">
      <Grid container spacing={2} columns={{ xs: 4, md: 12}}>
        <Grid item xs={4} md={4}>
          Information
          Hitta hit
        </Grid>
        <Grid item xs={4} md={4}>
          Spelschema
          Lördag, Söndag
        </Grid>
        <Grid item xs={4} md={4}>
          Sponsorer
          Kontakt
        </Grid>
      </Grid>
      <Copyright />
    </Container>
  </Box>
);

export default Footer;
