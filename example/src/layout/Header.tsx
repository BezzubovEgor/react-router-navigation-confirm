import * as React from 'react';

import { Layout, Menu } from 'antd';
import { NavLink, withRouter } from 'react-router-dom';

const routes = [
    {
        child: 'Home',
        path: '/',
    }, {
        child: 'Demo',
        path: '/demo',
    }, {
        child: 'Api',
        path: '/users',
    }
];

export const Header = withRouter(({ location }) => (
    <Layout.Header>
        <Menu theme="dark" mode="horizontal" style={{ lineHeight: '64px' }} selectedKeys={[ location.pathname ]}>
            { routes.map(route => <Menu.Item key={ route.path }><NavLink to={ route.path }>{ route.child }</NavLink></Menu.Item>) }
        </Menu>
    </Layout.Header>
));