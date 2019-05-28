import { IRoute } from 'src/common/models';

import { Demo } from '../demo/components/Demo';
import { GetStarted } from '../getStarted/components/GetStarted';
import { Home } from '../home/components/Home';


export const ROUTES_MAP = {
    DEMO: {
        component: Demo,
        path: '/demo',
        title: 'Docs & Demo',
    },
    GET_STARTED: {
        component: GetStarted,
        path: '/getting-started',
        title: 'Get Started'
    },
    HOME: {
        component: Home,
        path: '/home',
        title: 'Home',
    },
};

export const ROUTES: IRoute[] = [
    ROUTES_MAP.HOME,
    ROUTES_MAP.GET_STARTED,
    ROUTES_MAP.DEMO,
];