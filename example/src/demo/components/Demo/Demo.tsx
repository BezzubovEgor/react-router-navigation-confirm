
import './Demo.css';

import { Layout } from 'antd';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';

import { DEMO_ROUTES } from '../../routes';
import { DemoSideMenu } from '../DemoSideMenu';

export const Demo = withRouter(({ match }) => (
    <Layout>
        <Layout.Content style={{ display: 'flex' }}>
            <Switch>
                { DEMO_ROUTES.map(({ path, component }) => component && <Route path={ `${match.url}/${path}` } component={ component } key={ path } />) }
                <Redirect to={ `${match.url}/${DEMO_ROUTES[0].path}` }/>
            </Switch>
        </Layout.Content>
        <DemoSideMenu/>
    </Layout>
));
