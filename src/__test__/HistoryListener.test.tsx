import * as React from 'react';

import { shallow, ShallowWrapper } from 'enzyme';

import { HISTORY_SERVICE } from '../lib/history-service';
import { HistoryListener, HistoryListenerWithRouter, HistoryStoreProps, HistoryStoreState } from '../lib/HistoryListener';
import { HistoryMock, LocationMock, MatchMock } from './__mocks__';


describe('<HistoryListener/>', () => {
    let mock: ShallowWrapper<HistoryStoreProps, HistoryStoreState, HistoryListener>;
    let historyMock: HistoryMock;
    let locationMock: LocationMock;
    let matchMock: MatchMock;

    beforeEach(() => {
        locationMock = new LocationMock();
        historyMock = new HistoryMock(locationMock, jest.fn());
        matchMock = new MatchMock();

        mock = shallow(
            <HistoryListener history={ historyMock } location={ locationMock } match={ matchMock }>
                <div/>
            </HistoryListener>
        );
    });

    it('should render <HistoryListener/>', () => {
        const children = 'Some test text';
        mock.setProps({ children })
        expect(mock).toHaveLength(1);
        expect(mock.text()).toEqual(children);

        mock.setProps({ children: undefined });
        expect(mock).toHaveLength(1);
        expect(mock.text()).toEqual('');
    });

    it('should render <HistoryListenerWithRouter/>', () => {
        expect(shallow(
            <HistoryListenerWithRouter>
                <div/>
            </HistoryListenerWithRouter>
        )).toHaveLength(1);
    });

    it('should subscribe to history on mounting', () => {
        const add = jest.spyOn(HISTORY_SERVICE, 'add');
        const LOCATION_KEY = '123456';

        expect(historyMock.listen).toHaveBeenCalledWith(mock.instance().listen);
        expect(mock.state().unlisten).toBe(historyMock.unlisten);
        
        (historyMock.listen as jest.Mock<{}>).mock.calls[0][0](new LocationMock('', LOCATION_KEY));
        expect(add).toHaveBeenCalledWith(LOCATION_KEY);
    });

    it('should unsubscribe from history on unmount', () => {
        expect(mock.state().unlisten).toBe(historyMock.unlisten);
        mock.unmount();
        expect(historyMock.unlisten).toHaveBeenCalled();
    });

});
