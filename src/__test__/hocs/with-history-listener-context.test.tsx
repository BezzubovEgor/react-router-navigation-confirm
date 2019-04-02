import * as React from 'react';

import { mount } from 'enzyme';

import { HistoryListenerContext } from '../../lib/components/HistoryListener';
import { withHistoryService } from '../../lib/hocs';
import { HistoryService } from '../../lib/services';

describe('withHistoryService test', () => {
    it('should inject history service to inner component', () => {
        const historyService = new HistoryService();
        const MockComponent: React.FC<{ historyService: HistoryService }> = () => null;
        const MockComponentWrapper = withHistoryService(MockComponent);
        const mock = mount(
            <HistoryListenerContext.Provider value={ historyService } >
                <MockComponentWrapper />
            </HistoryListenerContext.Provider>
        );

        expect(mock.find(MockComponent).props().historyService).toEqual(historyService);
    });
});