import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';

const lotteryItems = [
  {
    company: 'Milwaukee',
    item: 'Skruvdragare mm',
    value: 4000,
  },
  {
    company: 'Ojanperä Bildelar',
    item: 'Osram batteriladdare 904',
    value: 600,
  },
  {
    company: 'Hemmagastronomi',
    item: 'Helggourmetpåse för två',
    value: 395,
  },
  {
    company: 'Lundbäcks Inredning',
    item: 'Kontorsstol',
    value: 9000,
  },
  {
    company: 'Ditec',
    item: 'Biltvätt',
    value: 695,
  },
  {
    company: 'Mokk AB',
    item: 'Keramik (2023)',
    value: 1230,
  },
  {
    company: 'Svantes vilt och bär',
    item: 'Delikatesser (2023)',
    value: 450,
  },
  {
    company: 'Wika Möbler',
    item: 'String pockethylla',
    value: 1390,
  },
  {
    company: 'Inpuls',
    item: 'Träningskort för sommaren',
    value: 1500,
  },
  {
    company: 'Bonnier',
    item: 'Fyra nyutgivna pocketböcker',
    value: 350,
  },
  {
    company: 'Bonnier',
    item: 'Fyra nyutgivna pocketböcker',
    value: 350,
  },
  {
    company: '',
    item: 'Inramad Liten Litografi av Annika Waara',
    value: 500,
  },
  {
    company: 'Rutviks handelsträdgård',
    item: 'Presentkort 200 kr',
    value: 200,
  },
  {
    company: 'Rutviks handelsträdgård',
    item: 'Presentkort 200 kr',
    value: 200,
  },
  {
    company: 'Petterssons deli',
    item: 'Charkdelikatesser presentkort',
    value: 200,
  },
  {
    company: 'Niemi Bil',
    item: 'Hyrbil helg Mazda CX-60',
    value: 5000,
  },
];

const Lottery = () => (
  <Container sx={{mt: 2, mb: 2}} maxWidth="md">
    <Typography variant="h4" component="h1" gutterBottom>
      Stora Lotteriet
    </Typography>

    <Typography variant="body1" paragraph>
      Lottpris 50 kr, betalas med Swish
    </Typography>
    <Typography variant="body1" paragraph>
      Dragning sker Söndag 14 maj kl 14.00 på Sundis. Vinnarna meddelas per telefon om de inte finns på plats.
    </Typography>

    <Typography variant="h5" component="h2" gutterBottom>
      Vinstplan
    </Typography>

    <Typography variant="body1" component="ul" gutterBottom>
      <li>Total 1050 lotter</li>
      <li>Vinstutlämning vecka 20</li>
    </Typography>

    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Företag</TableCell>
            <TableCell>Vinst</TableCell>
            <TableCell>Värde (kr)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {lotteryItems
            .sort((a, b) => b.value - a.value)
            .map(({ company, item, value }, index) => (
            <TableRow key={`lotteryItem-${index}`}>
              <TableCell>{company}</TableCell>
              <TableCell>{item}</TableCell>
              <TableCell>{value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </Container>
);

export default Lottery;
