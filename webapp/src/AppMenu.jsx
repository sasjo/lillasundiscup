import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { Link as RouterLink } from 'react-router-dom';

const pages = [
  // { name: 'Matcher', href: '/matcher.html' },
  // { name: 'Lag', href: '/lag.html' },
  { name: 'Regler', href: '/regler.html' },
  { name: 'Information', href: '/info.html' },
//  { name: 'Stora lotteriet', href: '/stora-lotteriet.html' },
  { name: 'Sponsorer 2024', href: '/sponsorer.html' },
];

// TODO Move to common place? Should we use translations to make changes easy?
const logo = 'Lilla Sundis Cup';

const AppMenu = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="relative">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            color="inherit"
            component={RouterLink}
            to="/"
            sx={{mr: 2, display: {xs: 'none', md: 'flex', textDecoration: 'none'}}}
          >
            {logo}
          </Typography>

          <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}>
            <IconButton
              size="large"
              aria-label="Navigering"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon/>
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom', horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top', horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: {xs: 'block', md: 'none'},
              }}
            >
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography
                  textAlign="center"
                  color="inherit"
                  component={RouterLink}
                  to="/"
                  sx={{ textDecoration: 'none' }}
                >
                  Hem
                </Typography>
              </MenuItem>
              {pages.map(({name, href}) => (
                <MenuItem key={href} onClick={handleCloseNavMenu}>
                  <Typography
                    textAlign="center"
                    color="inherit"
                    component={RouterLink}
                    to={href}
                    sx={{ textDecoration: 'none' }}
                  >
                    {name}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            color="inherit"
            component={RouterLink}
            to="/"
            sx={{flexGrow: 1, display: {xs: 'flex', md: 'none', textDecoration: 'none'}}}
          >
            {logo}
          </Typography>
          <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
            {pages.map(({name, href }) => (
              <Button
                component={RouterLink}
                to={href}
                key={href}
                onClick={handleCloseNavMenu}
                sx={{my: 2, color: 'white', display: 'block', textAlign: 'center' }}
              >
              {name}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default AppMenu;
