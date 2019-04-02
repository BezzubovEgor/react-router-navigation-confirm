import * as React from 'react';

import { shallow, ShallowWrapper } from 'enzyme';
import { NavigationConfirmWithRouter } from '../../lib/components/NavigationConfirm';
import { NavigationConfirmModal, NavigationConfirmModalProps } from '../../lib/components/NavigationConfirmModal';


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
        const mockModal = shallow(mock.instance().renderModal({ onConfirm, onCancel }));

        expect(mock).toHaveLength(1);
        expect(mock.find(NavigationConfirmWithRouter)).toHaveLength(1);

        // should render modal
        expect(mockModal.find(`.${NavigationConfirmModal.defaultProps.modalClassName}`)).toHaveLength(1);

        // should render backdrop
        expect(mockModal.find(`.${NavigationConfirmModal.defaultProps.backdropClassName}`)).toHaveLength(1);

        // should render body
        expect(mockModal.find(`.${NavigationConfirmModal.defaultProps.contentClassName}`)).toHaveLength(1);
        expect(mockModal.find(`.${NavigationConfirmModal.defaultProps.bodyClassName}`)).toHaveLength(1);
        expect(mockModal.find(`.${NavigationConfirmModal.defaultProps.bodyClassName}`).text()).toEqual(NavigationConfirmModal.defaultProps.children);
        
        // Should render footer with buttons
        expect(mockModal.find(`.${NavigationConfirmModal.defaultProps.footerClassName}`)).toHaveLength(1);
        expect(mockModal.find(`.${NavigationConfirmModal.defaultProps.buttonClassName}`)).toHaveLength(2);
        expect(mockModal.find(`.${NavigationConfirmModal.defaultProps.buttonConfirmClassName}`)).toHaveLength(1);
        expect(mockModal.find(`.${NavigationConfirmModal.defaultProps.buttonClassName}`).at(0).text()).toEqual(NavigationConfirmModal.defaultProps.confirmText);
        expect(mockModal.find(`.${NavigationConfirmModal.defaultProps.buttonClassName}`).at(1).text()).toEqual(NavigationConfirmModal.defaultProps.cancelText);

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