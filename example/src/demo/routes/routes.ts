import { IRoute } from 'src/common/models';

import { HistoryListenerDemo } from '../history-listener/HistoryListenerDemo';
import { NavigationConfirmModalDemo } from '../navigation-confirm-modal/NavigationConfirmModalDemo';
import { NavigationConfirmDemo } from '../navigation-confirm/NavigationConfirmDemo';

export const DEMO_ROUTES: IRoute[] = [
    {
        component: NavigationConfirmDemo,
        path: 'navigaion-confirm',
        title: 'NavigationConfirm',
    }, {
        component: NavigationConfirmModalDemo,
        path: 'navigaion-confirm-modal',
        title: 'NavigationConfirmModal',
    }, {
        component: HistoryListenerDemo,
        path: 'history-listener',
        title: 'HistoryListener',
    }
];