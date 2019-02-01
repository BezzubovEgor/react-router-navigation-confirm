import * as React from 'react';

import { shallow, ShallowWrapper } from 'enzyme';
import { NavigationConfirmWithRouter } from '../lib/NavigationConfirm';
import { NavigationConfirmModal, NavigationConfirmModalProps } from '../lib/NavigationConfirmModal';


describe('<NavigationConfirmModal/>', () => {
    let mock: ShallowWrapper<NavigationConfirmModalProps, {}, NavigationConfirmModal>;

    const onConfirm = jest.fn();
    const onCancel = jest.fn();

    beforeEach(() => {
        mock = shallow(<NavigationConfirmModal/>);
        onConfirm.mockClear();
        onCancel.mockClear();
    });

    it('should render <NavigationConfirmModal/>', () => {
        const instance = mock.instance() as any;
        const mockModal = shallow(mock.instance().renderModal({ onConfirm, onCancel }));

        expect(mock).toHaveLength(1);
        expect(mock.find(NavigationConfirmWithRouter)).toHaveLength(1);

        // should render modal
        expect(mockModal.find(`.${instance.defaultModalClassName}`)).toHaveLength(1);

        // should render backdrop
        expect(mockModal.find(`.${instance.defaultBackdropClassName}`)).toHaveLength(1);

        // should render body
        expect(mockModal.find(`.${instance.defaultContentClassName}`)).toHaveLength(1);
        expect(mockModal.find(`.${instance.defaultBodyClassName}`)).toHaveLength(1);
        expect(mockModal.find(`.${instance.defaultBodyClassName}`).text()).toEqual(instance.defaultChildren);
        
        // Should render footer with buttons
        expect(mockModal.find(`.${instance.defaultFooterClassName}`)).toHaveLength(1);
        expect(mockModal.find(`.${instance.defaultButtonClassName}`)).toHaveLength(2);
        expect(mockModal.find(`.${instance.defaultButtonConfirmClassName}`)).toHaveLength(1);
        expect(mockModal.find(`.${instance.defaultButtonClassName}`).at(0).text()).toEqual(instance.defaultConfirmText);
        expect(mockModal.find(`.${instance.defaultButtonClassName}`).at(1).text()).toEqual(instance.defaultCancelText);

    });

    it('should apply custom props to <NavigationConfirmModal/> and modal body', () => {
        const props: NavigationConfirmModalProps = {
            children: <div>Test</div>,

            cancelText: 'Test cancel text',
            confirmText: 'Test confirm text',

            backdropClassName: 'test-backdrop',
            bodyClassName: 'test-body',
            contentClassName: 'test-content',
            modalClassName: 'test-modal',

            buttonClassName: 'test-button',
            buttonConfirmClassName: 'test-buttonConfirm',
            footerClassName: 'test-footer',
        }
        
        mock.setProps(props);
        const mockModal = shallow(mock.instance().renderModal({ onConfirm, onCancel }))

        expect(mockModal.find(`.${props.modalClassName}`)).toHaveLength(1);

        expect(mockModal.find(`.${props.backdropClassName}`)).toHaveLength(1);

        expect(mockModal.find(`.${props.contentClassName}`)).toHaveLength(1);
        expect(mockModal.find(`.${props.bodyClassName}`)).toHaveLength(1);
        expect(mockModal.find(`.${props.bodyClassName}`).children().getElement()).toEqual(props.children);

        expect(mockModal.find(`.${props.footerClassName}`)).toHaveLength(1);
        expect(mockModal.find(`.${props.buttonClassName}`)).toHaveLength(2);
        expect(mockModal.find(`.${props.buttonConfirmClassName}`)).toHaveLength(1);
        expect(mockModal.find(`.${props.buttonClassName}`).at(0).text()).toEqual(props.confirmText);
        expect(mockModal.find(`.${props.buttonClassName}`).at(1).text()).toEqual(props.cancelText);
    });

    it('should hanlde onClick and onCancel events', () => {
        const props = {
            buttonClassName: 'test-button',
            onCancel: jest.fn(),
            onConfirm: jest.fn(),
        }

        mock.setProps(props);

        const mockModal = shallow(mock.instance().renderModal({ onConfirm, onCancel }))
        const buttons = mockModal.find(`.${props.buttonClassName}`);

        buttons.at(0).simulate('click');
        expect(props.onCancel).not.toHaveBeenCalled();
        expect(props.onConfirm).toHaveBeenCalled();
        expect(onConfirm).toHaveBeenCalled();

        buttons.at(1).simulate('click');
        expect(props.onCancel).toHaveBeenCalled();
        expect(onCancel).toHaveBeenCalled();
    });

    it('should decorate function with other function', () => {
        const hook = jest.fn();
        const decoratedFunction = jest.fn();
        const decorate = mock.instance().decorate;

        decorate(undefined)(decoratedFunction)();
        expect(hook).not.toHaveBeenCalled();
        expect(decoratedFunction).toHaveBeenCalled();

        decoratedFunction.mockClear();

        decorate(hook)(decoratedFunction)();
        expect(hook).toHaveBeenCalled();
        expect(decoratedFunction).toHaveBeenCalled();
    });
});