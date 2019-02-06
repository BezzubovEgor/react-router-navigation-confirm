import * as React from 'react';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';

import { NavigationConfirmModalDemo } from '../navigation-confirm-modal/NavigationConfirmModalDemo';

const Users = () => <h2>Piu2</h2>;

export const DemoRouter = withRouter(({ match }) => (
    <Switch>
        <Redirect exact={ true } from={ match.url } to={ `${match.url}/navigaion-confirm-modal/` }/>
        <Route path={ `${match.url}/navigaion-confirm-modal/` } component={NavigationConfirmModalDemo} />
        <Route path={ `${match.url}/piu2/` } component={Users} />
    </Switch>
));