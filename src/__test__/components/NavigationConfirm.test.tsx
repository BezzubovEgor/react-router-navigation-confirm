import * as React from 'react';

import { shallow, ShallowWrapper } from 'enzyme';
import { Location } from 'history';

import {
    NavigationConfirm,
    NavigationConfirmProps,
    NavigationConfirmState,
} from '../../lib/components/NavigationConfirm';
import { HistoryService } from '../../lib/services/history-service';
import { NavigationConfirmChildData } from '../../lib/types';
import { HistoryMock, LocationMock, MatchMock } from '../__mocks__';


describe('<NavigationConfirm/>', () => {
    let mock: ShallowWrapper<NavigationConfirmProps, NavigationConfirmState, NavigationConfirm>;
    let historyMock: HistoryMock;
    let locationMock: LocationMock;
    let matchMock: MatchMock;

    const childrenText = 'some text';
    const children = jest.fn((data: NavigationConfirmChildData) => childrenText);
    const addEventListenerSpy = jest.spyOn(window, 'addEventListener');
    const removeEventListenerSpy = jest.spyOn(window, 'removeEventListener');
    const historyService = new HistoryService();

    beforeEach(() => {
        locationMock = new LocationMock();
        historyMock = new HistoryMock(locationMock, jest.fn(), jest.fn());
        matchMock = new MatchMock();
        children.mockClear();
        addEventListenerSpy.mockClear();
        removeEventListenerSpy.mockClear();

        mock = shallow(
            <NavigationConfirm
                history={ historyMock }
                location={ locationMock }
                match={ matchMock } 
                historyService={ historyService } >
                { children }
            </NavigationConfirm>
        );
    });

    it('should render <NavigationConfirm/>', () => {
        expect(mock).toHaveLength(1);
        expect(mock.state().isOpen).toBeFalsy();
        expect(mock.state().isActive).toBeTruthy();
        expect(mock.state().action).toEqual('PUSH');
        expect(mock.state().nextLocation).toEqual({ pathname: '/', search: '', state: '', hash: '' })
    });

    it('should render null if is not active or not open', () => {
        mock.setState({ isActive: true, isOpen: false });
        expect(mock.text()).toEqual('');

        mock.setState({ isActive: false, isOpen: true });
        expect(mock.text()).toEqual('');

        mock.setState({ isActive: true, isOpen: true });
        expect(mock.text()).toEqual(childrenText);
    });

    it(`should subscribe to history to reblock route on history change
         block history changes and add event listener to 'beforeunload'
         event to prevent reload of the page`, () => {

        expect(historyMock.block).toHaveBeenCalledWith(mock.instance().block);
        expect(historyMock.listen).toHaveBeenCalledWith(mock.instance().reblock);
        expect(addEventListenerSpy).toHaveBeenCalledWith('beforeunload', mock.instance().onBeforeUnload);

        expect(mock.instance().unblock).toEqual(historyMock.unblock);
        expect(mock.instance().unlisten).toEqual(historyMock.unlisten);
    });

    it(`should unsubscribe from history changes, ubblock history and remove
        event 'beforeunload' event listener`, () => {
        const instance = mock.instance();
        const onBeforeUnload = mock.instance().onBeforeUnload;

        expect(instance.unblock).toEqual(historyMock.unblock);
        expect(instance.unlisten).toEqual(historyMock.unlisten);

        mock.unmount();

        expect(instance.unblock).toHaveBeenCalled();
        expect(instance.unlisten).toHaveBeenCalled();
        expect(removeEventListenerSpy).toHaveBeenCalledWith('beforeunload', onBeforeUnload);
    });

    it('should listen history and reblock it on some changes', () => {
        expect(mock.instance().unlisten).toEqual(historyMock.unlisten);
        expect(historyMock.listen).toHaveBeenCalledWith(mock.instance().reblock);
        const handler = mock.instance().reblock;

        (mock.instance().unblock as jest.Mock).mockClear();
        (historyMock.block as jest.Mock).mockClear();

        handler();

        expect(mock.instance().unblock).toHaveBeenCalled();
        expect(historyMock.block).toHaveBeenCalled();
        expect(mock.instance().unblock).toEqual(historyMock.unblock);
        expect(mock.state().isActive).toBeTruthy();
    });

    it('should block transition of is active and return false, else should not return some value', () => {
        expect(historyMock.block).toHaveBeenCalledWith(mock.instance().block);
        
        const handler = mock.instance().block;
        const nextLocation = { pathname: '/new-path', search: 'test', state: 'test', hash: 'test' };
        const openSpy = jest.spyOn(mock.instance(), 'open');
        openSpy.mockClear();

        mock.setState({ isActive: true, isOpen: false });
        expect(handler(nextLocation, 'POP')).toBeFalsy();
        expect(mock.state().action).toEqual('POP');
        expect(mock.state().nextLocation).toEqual(nextLocation);
        expect(mock.state().isOpen).toBeTruthy();
        expect(openSpy).toHaveBeenCalled();

        openSpy.mockClear();
        mock.setState({ isActive: false, isOpen: false });
        expect(handler(nextLocation, 'PUSH')).toBeUndefined();
        expect(mock.state().action).toEqual('POP');
        expect(mock.state().nextLocation).toEqual(nextLocation);
        expect(mock.state().isOpen).toBeFalsy();
        expect(openSpy).not.toHaveBeenCalled();

        openSpy.mockClear();
        mock.setState({ isActive: true, isOpen: false });
        mock.setProps({ when: false });
        expect(handler(nextLocation, 'PUSH')).toBeUndefined();
        expect(mock.state().action).toEqual('POP');
        expect(mock.state().nextLocation).toEqual(nextLocation);
        expect(mock.state().isOpen).toBeFalsy();
        expect(openSpy).not.toHaveBeenCalled();
    });

    it('should return message on before unload page', () => {
        expect(addEventListenerSpy).toHaveBeenCalledWith('beforeunload', mock.instance().onBeforeUnload);

        const handler = mock.instance().onBeforeUnload;
        const unloadMsg = 'test message';
        const event = {
            preventDefault: jest.fn(),
        }

        expect(handler(event)).toEqual('msg');
        expect(event.preventDefault).toHaveBeenCalled();

        event.preventDefault.mockClear();
        mock.setProps({ unloadMsg })

        expect(handler(event)).toEqual(unloadMsg);
        expect(event.preventDefault).toHaveBeenCalled();
    });

    it('should navigate if children call `onConfirm` and close modal on cancel', () => {
        mock.setState({ isOpen: true });

        const data = children.mock.calls[0][0];
        const navigateSpy = jest.spyOn(mock.instance(), 'navigate');
        const getHistoryFunctionSpy = jest.spyOn(historyService, 'getHistoryFunction');

        mock.setState({ action: 'PUSH' });
        historyMock.push.mockClear();

        data.onConfirm();
        expect(navigateSpy).toHaveBeenCalled();
        expect(getHistoryFunctionSpy).toHaveBeenCalled();
        expect(mock.state().isActive).toBeFalsy();
        expect(mock.state().isOpen).toBeFalsy();
        expect(historyMock.push).toHaveBeenCalled();

        navigateSpy.mockClear();
        getHistoryFunctionSpy.mockClear();
        mock.setState({ isOpen: true });

        data.onCancel();
        expect(mock.state().isOpen).toBeFalsy();
    });

    it('should test work of when prop', () => {
        mock.setProps({ when: true });
        expect(mock.instance().shouldShow()).toBeTruthy();
        mock.setProps({ when: false });
        expect(mock.instance().shouldShow()).toBeFalsy();

        mock.setProps({ when: () => true });
        expect(mock.instance().shouldShow()).toBeTruthy();
        mock.setProps({ when: () => false });
        expect(mock.instance().shouldShow()).toBeFalsy();

        mock.setProps({
            location: { pathname: '/1', key: '', hash: '', search: '', state: {} },
            when: ({ pathname }: Location) => pathname.includes('/1'), 
        });
        expect(mock.instance().shouldShow()).toBeTruthy();
        mock.setProps({
            location: { pathname: '/2', key: '', hash: '', search: '', state: {} },
        });
        expect(mock.instance().shouldShow()).toBeFalsy();
    });

});