import * as React from 'react';

import { Layout, Menu } from 'antd';
import { NavLink, withRouter } from 'react-router-dom';

import { ROUTES } from '../router';

export const Header = withRouter(({ location, match }) => (
    <Layout.Header className="header d-flex justify-between">
        <div className="d-flex justify-start">
            <div className="brand">
                <NavLink to="/">
                    <img className="logo" src="/logo.png"/>
                    <span>RRND</span>
                </NavLink>
            </div>
            <Menu theme="dark" mode="horizontal" style={{ lineHeight: '64px' }} selectedKeys={ getSecondInPath(location.pathname) }>
                { ROUTES.map(route => <Menu.Item key={ route.path }><NavLink to={ route.path }>{ route.title }</NavLink></Menu.Item>) }
            </Menu>
        </div>
        <div className="header-links">
            <a href="https://www.npmjs.com/package/react-router-navigation-confirm" ><i className="devicons devicons-npm"/></a>
            <a href="https://github.com/BezzubovEgor/react-router-navigation-confirm" ><i className="devicons devicons-github_badge"/></a>
        </div>
    </Layout.Header>
));

function getSecondInPath(pathname: string) {
    if (!pathname) {
        return [];
    }

    const second = pathname.split('/')[1];
    return second ? [ `/${second}` ] : [ '/' ];
}