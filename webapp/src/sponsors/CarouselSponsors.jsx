import * as React from 'react';
import Container from '@mui/material/Container';
import Carousel from 'react-material-ui-carousel';
import sponsors from './sponsor-data.json';
import {useLocation} from 'react-router-dom';

const { main, home } = sponsors;

// We always show the main sponsor first. After that we randomize sponsors to not
// favor alphabetically named companies. We do this once on page load to ensure
// the carousel order is stable after first seen.
const content = [
  main,
  ...home
    .filter(({ img }) => img !== null)
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value),
];

const CarouselSponsors = () => {

  // Hide the carousel on the landing page.
  const {pathname} = useLocation();

  if (pathname === '/') {
    return null;
  }

  return (
    <Container sx={{mt: 2, mb: 2}} maxWidth="md">
      <Carousel
        animation="fade"
        stopAutoPlayOnHover={false}
        indicators={false}
        navButtonsAlwaysInvisible
        interval={3000}
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
