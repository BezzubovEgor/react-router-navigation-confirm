
import { Layout } from 'antd';

import { Header } from './Header';

export const AppLayout = ({ children } : any) => (
    <Layout style={{ minHeight: '100vh' }}>
        <Header/>
        <Layout>
            <Layout.Content style={{ display: 'flex' }}>
                { children }
            </Layout.Content>
        </Layout>
    </Layout>

);
