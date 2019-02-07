import * as React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

import { Layout, Menu } from 'antd';

const routes = [
    {
        child: 'NavigationConfirmModal',
        path: '/demo/navigaion-confirm-modal',
    }, {
        child: 'NavigationConfirm',
        path: '/demo/navigaion-confirm',
    }, {
        child: 'HistoryListener',
        path: '/demo/history-listener',
    }
];

class AppMenu extends React.Component<{
    location: Location,
}, {}> {
    public state = {
        collapsed: false,
    };

    public onCollapse = () => this.setState({ collapsed: !this.state.collapsed });

    public pathnameIncludes = (path: string): boolean => {
        const splitedPathname = this.props.location.pathname.split('/');
        const splitedPath = path.split('/');

        for (const item of splitedPath) {
            if (splitedPathname.indexOf(item) === -1) {
                return false;
            }
        }

        return true;
    }

    public getSelected = () => routes
        .filter(route => this.pathnameIncludes(route.path))
        .map(route => route.path);

    public render() {
        return (
            <Layout.Sider
                breakpoint="sm"
                collapsible={ true }
                collapsed={ this.state.collapsed }
                onCollapse={ this.onCollapse }
                collapsedWidth={ 80 }
                trigger={ null }
                width={ 250 }
                >
                <Menu theme="dark" mode="inline" selectedKeys={ this.getSelected() }>
                    { routes.map(route => <Menu.Item key={ route.path }><NavLink to={ route.path }>{ route.child }</NavLink></Menu.Item>) }
                </Menu>
            </Layout.Sider>
        );
    }
}

export const SideMenu = withRouter(AppMenu as any);