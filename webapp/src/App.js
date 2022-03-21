import React from 'react';
import Box from '@mui/material/Box';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {ThemeProvider} from '@mui/material/styles';
import {QueryClient, QueryClientProvider} from 'react-query';
import CssBaseline from '@mui/material/CssBaseline';
import AppMenu from './AppMenu';
import Footer from './Footer';
import theme from './theme';
import Home from './Home';
import GameSchedule from './GameSchedule';
import Teams from './Teams';
import WebSponsors from './sponsors/WebSponsors';
import CarouselSponsors from './sponsors/CarouselSponsors';

const queryClient = new QueryClient();

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
          }}
        >
          <CssBaseline/>
          <Router>
            <AppMenu/>
            <CarouselSponsors/>
            <main>
              <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/spelschema.html" element={<GameSchedule/>}/>
                <Route path="/lag.html" element={<Teams/>}/>
              </Routes>
            </main>
            <Footer/>
          </Router>
        </Box>
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default App;
