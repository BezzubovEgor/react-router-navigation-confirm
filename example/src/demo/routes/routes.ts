import { IRoute } from 'src/common/models';

import { HistoryListenerDemo } from '../history-listener/HistoryListenerDemo';
import { NavigationConfirmModalDemo } from '../navigation-confirm-modal/NavigationConfirmModalDemo';
import { NavigationConfirmDemo } from '../navigation-confirm/NavigationConfirmDemo';

export const DEMO_URLS = {
    navigaionConfirm: {
        component: NavigationConfirmDemo,
        path: 'navigaion-confirm',
        title: 'NavigationConfirm',
    },

    navigaionConfirmModal: {
        component: NavigationConfirmModalDemo,
        path: 'navigaion-confirm-modal',
        title: 'NavigationConfirmModal',
    },

    historyListener: {
        component: HistoryListenerDemo,
        path: 'history-listener',
        title: 'HistoryListener',
    },
}

export const DEMO_ROUTES: IRoute[] = [
    DEMO_URLS.navigaionConfirm,
    DEMO_URLS.navigaionConfirmModal,
    DEMO_URLS.historyListener,
];