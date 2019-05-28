import * as React from 'react';

import { Layout } from 'antd';

import { Brand } from './Brand';
import { TopMenu } from './TopMenu';


const links = [
    {
        icon: 'devicons devicons-npm',
        to: 'https://www.npmjs.com/package/react-router-navigation-confirm',
    }, {
        icon: 'devicons devicons-github_badge',
        to: 'https://github.com/BezzubovEgor/react-router-navigation-confirm',
    }
];

export const Header = () => (
    <Layout.Header className="header d-flex justify-between">
        <div className="d-flex justify-start">
            <Brand />
            <TopMenu />
        </div>
        <div className="header-links">
            { links.map(({ to, icon }) => <a href={ to } key={ to }><i className={ icon } /></a>) }
        </div>
    </Layout.Header>
);
