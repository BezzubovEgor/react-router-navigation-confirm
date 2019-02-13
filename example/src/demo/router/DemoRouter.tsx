import * as React from 'react';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';

import { NavigationConfirmModalDemo } from '../navigation-confirm-modal/NavigationConfirmModalDemo';
import { NavigationConfirmDemo } from '../navigation-confirm/NavigationConfirmDemo';

export const DemoRouter = withRouter(({ match }) => (
    <Switch>
        <Route path={ `${match.url}/navigaion-confirm-modal` } component={ NavigationConfirmModalDemo } />
        <Route path={ `${match.url}/navigaion-confirm` } component={ NavigationConfirmDemo } />
        <Redirect to={ `${match.url}/navigaion-confirm-modal` }/>
    </Switch>
));