import * as React from 'react';
import PropTypes from 'prop-types';
import Container from '@mui/material/Container';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import sponsors from './sponsor-data.json';

const SponsorItem = ({item: {name, img, link}, cols = 1}) => (
  <ImageListItem key={img} component="a" href={link} title={name}>
    <img
      src={img}
      alt={name}
      loading="lazy"
      style={{objectFit: 'scale-down', maxWidth: '100%', maxHeight: '100px'}}
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

const SponsorList = ({ title, sponsors }) => {
  return (
    <Container sx={{mt: 2, mb: 2}} maxWidth="md">
      <Divider>
        <Chip label={title}/>
      </Divider>
      <ImageList variant="default" cols={sponsors.length > 2 ? 3 : 2} gap={8}>
        {sponsors.map((item, index) => (
          <SponsorItem key={`sponsor${index}`} item={item}/>
        ))}
      </ImageList>
    </Container>
  );
}

SponsorList.propTypes = {
  title: PropTypes.string.isRequired,
  sponsors: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  })).isRequired,
};

export default SponsorList;
