import * as React from 'react';

import { NavigationConfirmChildData, WhenPropType } from '../types';
import { NavigationConfirmWithRouter } from './NavigationConfirm';

import './NavigationConfirmModal.css';


interface IProps {
    children?: React.ReactNode;
    confirmText?: string,
    cancelText?: string,
    modalClassName?: string,
    backdropClassName?: string,
    contentClassName?: string,
    bodyClassName?: string,
    footerClassName?: string,
    buttonClassName?: string,
    buttonConfirmClassName?: string,

    onConfirm?: () => void;
    onCancel?: () => void;

    when?: WhenPropType,
}

class NavigationConfirmModal extends React.Component<IProps, {}> {
    public static defaultProps: IProps = {
        children: 'Are you sure you want to leave this page?',

        backdropClassName: 'nc-modal__backdrop',
        bodyClassName: 'nc-modal__body',
        contentClassName: 'nc-modal__content',
        footerClassName: 'nc-modal__footer',
        modalClassName: 'nc-modal',

        buttonClassName: 'nc-modal__button',
        buttonConfirmClassName: 'confirm',
        cancelText: 'Cancel',
        confirmText: 'Confirm',
    }

    public decorate = (fn: () => void, hook?: () => void) => {
        return () => {
            if (hook) {
                hook();
            }
            fn();
        }
    }

    public renderModal = ({ onConfirm, onCancel }: NavigationConfirmChildData): React.ReactElement<{}> => {
        const {
            children,
            confirmText,
            cancelText,
            modalClassName,
            backdropClassName,
            contentClassName,
            bodyClassName,
            footerClassName,
            buttonClassName,
            buttonConfirmClassName,

            onCancel: cancelHook,
            onConfirm: confirmHook,
        } = this.props;
        
        return (
            <div className={ modalClassName }>
                <div className={ backdropClassName }/>
                <div className={ contentClassName }>
                    <div className={ bodyClassName }>
                        { children }
                    </div>
                    <div className={ footerClassName }>
                        <button className={ `${buttonClassName} ${buttonConfirmClassName}` }
                                onClick={ this.decorate(onConfirm, confirmHook) }>
                                { confirmText }
                        </button>
                        <button className={ buttonClassName }
                                onClick={ this.decorate(onCancel, cancelHook) }>
                                { cancelText }
                        </button>
                    </div>
                </div>
                    
            </div>
        );
    }

    public render() {
        return (
            <NavigationConfirmWithRouter when={ this.props.when }>
                { this.renderModal }
            </NavigationConfirmWithRouter>
        );
    }
}


export {
    NavigationConfirmModal,
    IProps as NavigationConfirmModalProps,
}
