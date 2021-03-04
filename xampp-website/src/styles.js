import { createMuiTheme, makeStyles } from '@material-ui/core';

import { grey } from '@material-ui/core/colors';

export const customTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#ffffff',
    },
    secondary: {
      main: '#42A3F8',
    },
  },
});

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  content: {
    flexGrow: 1,
    height: 160,
    maxHeight: 160,
    padding: '0 auto',
    backgroundColor: grey[50],
    borderTop: `1px solid ${grey[300]}`,
    borderBottom: `1px solid ${grey[300]}`,
  },
  translateBox: {
    width: '100%',
    maxWidth: 1300,
    minHeight: 250,
    backgroundColor: customTheme.palette.primary.main,
    borderRadius: 10,
    margin: '60px auto 0 auto',
    boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.46)',
  },
  tabs: {
    maxHeight: 50,
  },
  tabsWrapper: {
    flexGrow: 1,
  },
  tab: {
    flexGrow: 1,
    alignSelf: 'center',
    justifySelf: 'center',
  },
  invertButtonBox: {
    maxHeight: 50,
  },
  invertButton: {
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 36,
  },
  textBox: {
    height: 200,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  textField: {
    flexGrow: 1,
    height: 200,
    border: 'none',
    resize: 'none',
    padding: '0 10px',
  },
}));
