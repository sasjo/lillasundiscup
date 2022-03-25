import * as React from 'react';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import Container from '@mui/material/Container';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import sponsors from './sponsor-data.json';

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

const WebSponsors = () => {
  const { main, home, web } = sponsors;

  const all = [main, ...home, ...web];

  return (
    <Container sx={{mt: 2, mb: 2}} maxWidth="md">
      <Divider>
        <Chip label="Sponsorer"/>
      </Divider>
      <ImageList variant="standard" cols={4}>
        {all.map((item, index) => (
          <SponsorItem key={`sponsor${index}`} item={item}/>
        ))}
      </ImageList>
    </Container>
  );
}

export default WebSponsors;
