import { IRoute } from 'src/common/models';

import { Demo } from '../demo/Demo';
import { GetStarted } from '../get-started/GetStarted';
import { Home } from '../home/Home';

export const ROUTES: IRoute[] = [
    {
        component: Home,
        path: '/home',
        title: 'Home',
    }, {
        component: GetStarted,
        path: '/getting-started',
        title: 'Get Started'
    }, {
        component: Demo,
        path: '/demo',
        title: 'Docs & Demo',
    }
];