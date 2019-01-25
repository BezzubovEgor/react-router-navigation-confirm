import * as React from 'react';

import { NavigationConfirmChildData, NavigationConfirmWithRouter } from './NavigationConfirm';

import './NavigationConfirmModal.css';

interface IProps {
    children: React.ReactNode;
    confirmText: string,
    cancelText: string,
    modalClassName: string,
    backdropClassName: string,
    contentClassName: string,
    bodyClassName: string,
    footerClassName: string,
    buttonClassName: string,
    buttonConfirmClassName: string,

    onConfirm: () => void | undefined;
    onCancel: () => void | undefined;
}

export class NavigationConfirmModal extends React.Component<IProps, {}> {

    public decoreate = (hook: () => void | undefined) => {
        return (fn: () => void) => () => {
            if (hook) {
                hook();
            }
            fn();
        }
    }

    public render() {
        const {
            children = 'Are you sure you want to leave this page?',
            confirmText = 'Confirm',
            cancelText = 'Cancel',
            modalClassName = 'nc-modal',
            backdropClassName = 'nc-modal__backdrop',
            contentClassName = 'nc-modal__content',
            bodyClassName = 'nc-modal__body',
            footerClassName = 'nc-modal__footer',
            buttonClassName = 'nc-modal__button',
            buttonConfirmClassName = 'confirm',

            onCancel: cancelHook,
            onConfirm: confirmHook,
        } = this.props;

        return (
            <NavigationConfirmWithRouter>
                { ({ onConfirm, onCancel }: NavigationConfirmChildData) => (
                    <div className={ modalClassName }>
                        <div className={ backdropClassName }/>
                        <div className={ contentClassName }>
                            <div className={ bodyClassName }>
                                { children }
                            </div>
                            <div className={ footerClassName }>
                                <button className={ `${buttonClassName} ${buttonConfirmClassName}` } onClick={ this.decoreate(confirmHook)(onConfirm) }>{ confirmText }</button>
                                <button className={ buttonClassName } onClick={ this.decoreate(cancelHook)(onCancel) }>{ cancelText }</button>
                            </div>
                        </div>
                            
                    </div>
                ) }
            </NavigationConfirmWithRouter>
        );
    }
}