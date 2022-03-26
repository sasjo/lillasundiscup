import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';
import { svSE } from '@mui/material/locale';

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: 'rgb(43,43,43)',
    },
    secondary: {
      main: 'rgb(106, 135, 89)'// '#19857b',
    },
    error: {
      main: red.A400,
    },
  },
  svSE,
});

export default theme;
