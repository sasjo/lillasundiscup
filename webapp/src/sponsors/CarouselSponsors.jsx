import * as React from 'react';
import Container from '@mui/material/Container';
import Carousel from 'react-material-ui-carousel';
import sponsors from './sponsor-data.json';

const CarouselSponsors = () => {

  const { main, home } = sponsors;
  const content = [main, ...home];

  return (
    <Container sx={{mt: 2, mb: 2}} maxWidth="md">
      <Carousel
        animation="fade"
        stopAutoPlayOnHover={false}
        indicators={false}
        navButtonsAlwaysInvisible
        sx={{ mb: '10px', border: '1px solid black' }}
      >
        {content.map(({ img, name, link }, index) => (
          <div key={`sponsor${index}`} style={{ height: '150px' }}>
            <a href={link} title={name}>
              <img
                src={img}
                alt={name}
                loading="lazy"
                style={{ maxHeight: '100%', display: 'block', margin: '0 auto' }}
              />
            </a>
          </div>
        ))}
      </Carousel>
    </Container>
  );
}

export default CarouselSponsors;
