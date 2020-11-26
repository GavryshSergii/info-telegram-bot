import { createMuiTheme } from '@material-ui/core/styles';
import { ukUA } from '@material-ui/core/locale';

// A custom theme for this app
const theme = createMuiTheme(
  {
    palette: {
      text: {
        primary: '#fafafa',
        secondary: '#ffe1b6',
      },
      primary: {
        main: '#0C2B63',
        dark: '#0C183B',
      },
      secondary: {
        main: '#5383FF',
      },
      background: {
        default: '#000',
      },
    },
  },
  ukUA,
);

export default theme;
