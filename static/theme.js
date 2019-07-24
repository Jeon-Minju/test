import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import '../static/style.scss'

// Create a theme instance.
const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Spoqa Han Sans',
      'sans-serif',
    ].join(','),
  },
  overrides: {
    '@global': {
      body: {
        fontFamily : "Spoqa Han Sans",
        color:"#434e5a"
      },
      MuiButton: {
        root : {
          color:"#434e5a"
        },
        contained: {
          color:"#434e5a"
        }
      }
    },
  },
  palette: {
    primary: {
      main: '#297bff',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
});

export default theme;
