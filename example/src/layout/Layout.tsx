import * as React from 'react';

import { Layout } from 'antd';

import { Content } from './Content';
// import { Footer } from './Footer';
import { Header } from './Header';
import { SideMenu } from './SideMenu';

export class AppLayout extends React.Component {
    public render() {
        return (
            <Layout style={{ minHeight: '100vh' }}>
                <Header/>
                <Layout>
                    <Content/>
                    <SideMenu/>
                </Layout>
                {/* <Footer/> */}
            </Layout>
            
        );
    }
}