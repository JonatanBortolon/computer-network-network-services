import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/Header';

import Code from './routes/Code';
import About from './routes/About';

import { useStyles } from './styles';

function Routes() {
  const classes = useStyles();

  return (
    <Router>
      <div>
        <Header style={classes} />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Code />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default Routes;
