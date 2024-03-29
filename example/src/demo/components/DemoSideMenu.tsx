import { Affix, Layout, Menu } from 'antd';
import * as React from 'react';
import { match as Match, NavLink, withRouter } from 'react-router-dom';

import { DEMO_ROUTES } from '../routes';

class DemoMenu extends React.Component<{
    location: Location,
    match: Match,
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

    public getSelected = () => DEMO_ROUTES
        .filter(route => this.pathnameIncludes(route.path))
        .map(route => route.path);

    public render() {
        const { match } = this.props;
        return (
            <Layout.Sider
                breakpoint="sm"
                collapsible={ true }
                theme="light"
                collapsed={ this.state.collapsed }
                onCollapse={ this.onCollapse }
                collapsedWidth={ 80 }
                trigger={ null }
                width={ 250 }
                className="app_demo__sider"
                >
                <Affix offsetTop={ 0 }>
                    <Menu mode="inline" selectedKeys={ this.getSelected() }>
                        {
                            DEMO_ROUTES.map(route => (
                                <Menu.Item style={{ width: '100%' }} key={ route.path }>
                                    <NavLink to={ `${match.url}/${route.path}` }>{ route.title }</NavLink>
                                </Menu.Item>
                            ))
                        }
                    </Menu>
                </Affix>
            </Layout.Sider>
        );
    }
}

export const DemoSideMenu = withRouter(DemoMenu as any);
