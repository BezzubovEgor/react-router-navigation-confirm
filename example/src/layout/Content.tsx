import * as React from 'react';

import { Layout } from 'antd';

import { AppRouter } from '../router/AppRouter';

export class Content extends React.Component {
    public render() {
        return (
            <Layout.Content style={{ display: 'flex' }}>
                <AppRouter/>
            </Layout.Content>
        );
    }
}
