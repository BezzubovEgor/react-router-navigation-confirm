import * as React from 'react';

import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import { AppLayout } from './layout/Layout';
import { ROUTES } from './router';


const App = () => (
  <Router>
    <AppLayout>
      <Switch>
        { ROUTES.map(({ path, component }) => component && <Route key={ path } path={ path } component={ component } />) }
      </Switch>
    </AppLayout>
  </Router>
);

export default App;
