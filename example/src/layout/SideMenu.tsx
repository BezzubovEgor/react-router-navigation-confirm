import * as React from 'react';

import { Icon, Layout, Menu } from 'antd';

export class SideMenu extends React.Component<{}, {}> {
    public state = {
        collapsed: false,
    };

    public onCollapse = () => this.setState({ collapsed: !this.state.collapsed });

    public render() {
        return (
            <Layout.Sider
                collapsible={ true }
                collapsed={ this.state.collapsed }
                onCollapse={ this.onCollapse }
                >
                <div className="logo" />
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                    <Menu.Item key="1">
                        <Icon type="pie-chart" />
                        <span>Option 1</span>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Icon type="desktop" />
                        <span>Option 2</span>
                    </Menu.Item>
                    <Menu.SubMenu
                        key="sub1"
                        title={<span><Icon type="user" /><span>User</span></span>}
                        >
                        <Menu.Item key="3">Tom</Menu.Item>
                        <Menu.Item key="4">Bill</Menu.Item>
                        <Menu.Item key="5">Alex</Menu.Item>
                    </Menu.SubMenu>
                    <Menu.SubMenu
                        key="sub2"
                        title={<span><Icon type="team" /><span>Team</span></span>}
                        >
                        <Menu.Item key="6">Team 1</Menu.Item>
                        <Menu.Item key="8">Team 2</Menu.Item>
                    </Menu.SubMenu>
                    <Menu.Item key="9">
                        <Icon type="file" />
                        <span>File</span>
                    </Menu.Item>
                </Menu>
            </Layout.Sider>
        );
    }
}