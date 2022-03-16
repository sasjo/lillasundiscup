import React from 'react';
import Box from '@mui/material/Box';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import {ThemeProvider} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import AppMenu from './AppMenu';
import Footer from './Footer';
import theme from './theme';
import Sponsors from './Sponsors';
import Home from './Home';
import GameSchedule from './GameSchedule';
import Teams from './Teams';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
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
          <main>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/spelschema" element={<GameSchedule/>}/>
              <Route path="/lag" element={<Teams/>}/>
            </Routes>
            <Sponsors/>
          </main>
          <Footer/>
        </Router>
      </Box>
    </ThemeProvider>
  );
};

export default App;
