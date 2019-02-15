import { IRoute } from 'src/common/models';

import { Demo } from '../demo/Demo';

export const ROUTES: IRoute[] = [
    {
        path: '/',
        title: 'Home',
    }, {
        component: Demo,
        path: '/demo',
        title: 'Demo',
    }
];