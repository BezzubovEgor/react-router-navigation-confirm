import { HashRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

import { AppLayout } from './layout/components/Layout';
import { ROUTES } from './routes';

const App = () => (
  <Router>
    <AppLayout>
      <Switch>
        { ROUTES.map(({ path, component }) => component && <Route key={ path } path={ path } component={ component } />) }
        <Redirect to={ `${ROUTES[0].path}` }/>
      </Switch>
    </AppLayout>
  </Router>
);

export default App;
