import * as React from 'react';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import Container from '@mui/material/Container';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';

const mainSponsor = {
  name: 'Greencare',
  link: 'http://greencare.nu',
  subtitle: 'Huvudsponsor',
  img: 'images/greencare.jpg',
};

const planSponsor = [
  {
    name: 'Plan Sponsor 1',
    link: 'https://www.sunderbysk.se',
    img: 'images/missing-logo.png',
  },
  {
    name: 'Plan Sponsor 2',
    link: 'https://www.sunderbysk.se',
    img: 'images/missing-logo.png',
  },
];

const sponsorData = [
  {
    name: 'Sponsor 1',
    link: 'https://www.sunderbysk.se',
    img: 'images/missing-logo.png',
  },
  {
    name: 'Sponsor 2',
    link: 'https://www.sunderbysk.se',
    img: 'images/missing-logo.png',
  },
  {
    name: 'Sponsor 3',
    link: 'https://www.sunderbysk.se',
    img: 'images/missing-logo.png',
  },
  {
    name: 'Sponsor 4',
    link: 'https://www.sunderbysk.se',
    img: 'images/missing-logo.png',
  },
  {
    name: 'Sponsor 5',
    link: 'https://www.sunderbysk.se',
    img: 'images/missing-logo.png',
  },
  {
    name: 'Sponsor 6',
    link: 'https://www.sunderbysk.se',
    img: 'images/missing-logo.png',
  },
  {
    name: 'Sponsor 7',
    link: 'https://www.sunderbysk.se',
    img: 'images/missing-logo.png',
  },
];

const SponsorItem = ({ item: { name, img, link, subtitle = '' }, cols = 1 }) => (
  <ImageListItem key={img}>
    <img
      src={img}
      // srcSet={img}
      alt={name}
      loading="lazy"
    />
    <ImageListItemBar
      title={<Typography component="a" href={link}>{name}</Typography>}
      subtitle={subtitle}
      position="below"
    />
  </ImageListItem>
);

SponsorItem.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
  }).isRequired,
  cols: PropTypes.number,
};

SponsorItem.defaultProps = {
  cols: 1,
};

// Use a carousel? https://www.npmjs.com/package/react-material-ui-carousel

const Sponsors = () => {
  return (
    <Container sx={{mt: 2, mb: 2}} maxWidth="md">
      <Divider>
        <Chip label="Huvudsponsor"/>
      </Divider>
      <ImageList variant="standard" cols={1}>
        <SponsorItem key="mainSponsor" item={mainSponsor} />
      </ImageList>
      <Divider>
        <Chip label="Plansponsor"/>
      </Divider>
      <ImageList variant="standard" cols={2}>
        {planSponsor.map((item, index) => (
          <SponsorItem key={`sponsor${index}`} item={item}/>
        ))}
      </ImageList>
      <Divider>
        <Chip label="Webbsponsor"/>
      </Divider>
      <ImageList variant="standard" cols={4}>
        {sponsorData.map((item, index) => (
          <SponsorItem key={`sponsor${index}`} item={item}/>
        ))}
      </ImageList>
    </Container>
  );
}

export default Sponsors;
