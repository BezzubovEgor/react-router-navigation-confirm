import { IRoute } from 'src/common/models';

import { HistoryListenerDemo } from '../components/HistoryListenerDemo';
import { NavigationConfirmDemo } from '../components/NavigationConfirmDemo';
import { NavigationConfirmModalDemo } from '../components/NavigationConfirmModalDemo';

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
    DEMO_URLS.HISTORY_LISTENER,
    DEMO_URLS.NAVIGATION_CONFIRM,
    DEMO_URLS.NAVIGATION_CONFIRM_MODAL,
];