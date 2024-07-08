import { createTheme } from '@mui/material/styles';

const themeConfig = createTheme({
  palette: {
    primary: {
      main: '#5BAEDE',  
    },
    secondary: {
      main: '#82E0C6', 
    },
  },
  typography: {
    
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 500,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 500,
    },
    body1: {
      fontSize: '1rem',
    },
  },
  spacing: 8,  
});

export default themeConfig;
