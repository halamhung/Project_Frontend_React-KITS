import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#fff'
    },
    secondary: {
      main: '#19857b'
    },
    header: {
      main: '#f0f0f0'
    },
    error: {
      main: red.A400
    },
  },
});

export default theme;