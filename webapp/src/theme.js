import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';
import { svSE } from '@mui/material/locale';

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
  },
  svSE,
});

export default theme;
