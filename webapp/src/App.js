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
import CarouselSponsors from './sponsors/CarouselSponsors';
import Info from './Info';
import Rules from './Rules';
import Sponsors from './Sponsors';
import ScrollToTop from './ScrollToTop';
import Lottery from './Lottery';

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
            <ScrollToTop/>
            <AppMenu/>
            <CarouselSponsors/>
            <main>
              <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/matcher.html" element={<GameSchedule/>}/>
                <Route path="/lag.html" element={<Teams/>}/>
                <Route path="/regler.html" element={<Rules/>}/>
                <Route path="/info.html" element={<Info/>}/>
                <Route path="/stora-lotteriet.html" element={<Lottery/>}/>
                <Route path="/sponsorer.html" element={<Sponsors/>}/>
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
