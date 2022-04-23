import * as React from 'react';
import Container from '@mui/material/Container';
import Carousel from 'react-material-ui-carousel';
import sponsors from './sponsor-data.json';
import {useLocation} from 'react-router-dom';

const CarouselSponsors = () => {

  const { main, home } = sponsors;
  const content = [main, ...home];

  // Hide the carousel on the landing page.
  const {pathname} = useLocation();
  const display = pathname === '/' ? 'none' : 'block';

  if (pathname === '/') {
    return null;
  }

  return (
    <Container sx={{mt: 2, mb: 2, display}} maxWidth="md">
      <Carousel
        animation="fade"
        stopAutoPlayOnHover={false}
        indicators={false}
        navButtonsAlwaysInvisible
      >
        {content.map(({ img, name, link }, index) => (
          <div key={`sponsor${index}`} style={{ height: '100px' }}>
            <a href={link} title={name}>
              <img
                src={img}
                alt={name}
                loading="lazy"
                style={{ maxHeight: '100%', maxWidth: '100%', display: 'block', margin: '0 auto' }}
              />
            </a>
          </div>
        ))}
      </Carousel>
    </Container>
  );
}

export default CarouselSponsors;
