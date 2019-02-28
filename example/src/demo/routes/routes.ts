import { IRoute } from 'src/common/models';

import { HistoryListenerDemo } from '../history-listener/HistoryListenerDemo';
import { NavigationConfirmModalDemo } from '../navigation-confirm-modal/NavigationConfirmModalDemo';
import { NavigationConfirmDemo } from '../navigation-confirm/NavigationConfirmDemo';

export const DEMO_URLS = {
    NAVIGATION_CONFIRM: {
        component: NavigationConfirmDemo,
        path: 'navigaion-confirm',
        title: 'NavigationConfirm',
    },

    NAVIGATION_CONFIRM_MODAL: {
        component: NavigationConfirmModalDemo,
        path: 'navigaion-confirm-modal',
        title: 'NavigationConfirmModal',
    },

    HISTORY_LISTENER: {
        component: HistoryListenerDemo,
        path: 'history-listener',
        title: 'HistoryListener',
    },
}

export const DEMO_ROUTES: IRoute[] = [
    DEMO_URLS.NAVIGATION_CONFIRM,
    DEMO_URLS.NAVIGATION_CONFIRM_MODAL,
    DEMO_URLS.HISTORY_LISTENER,
];