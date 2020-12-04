import { createMuiTheme } from '@material-ui/core/styles';
import lightGreen from '@material-ui/core/colors/lightGreen';
import grey from '@material-ui/core/colors/grey';

export default createMuiTheme({
    palette: {
      primary: {
        main: lightGreen[800],
        light: lightGreen[200],
        dark: lightGreen[900]
      },
      secondary: {
        main: grey[600],
        light: grey[400],
        dark: grey[900] 
      }
    },
  });