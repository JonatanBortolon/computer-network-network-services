import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routes from './Routes';
import * as serviceWorker from './serviceWorker';

import { ThemeProvider } from '@material-ui/core';

import { customTheme } from './styles';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={customTheme}>
      <Routes />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
