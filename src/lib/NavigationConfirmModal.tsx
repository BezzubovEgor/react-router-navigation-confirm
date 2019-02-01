import * as React from 'react';

import { NavigationConfirmChildData, NavigationConfirmWithRouter } from './NavigationConfirm';

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
}

export class NavigationConfirmModal extends React.Component<IProps, {}> {
    private defaultChildren = 'Are you sure you want to leave this page?';
    private defaultConfirmText = 'Confirm';
    private defaultCancelText = 'Cancel';
    private defaultModalClassName = 'nc-modal';
    private defaultBackdropClassName = 'nc-modal__backdrop';
    private defaultContentClassName = 'nc-modal__content';
    private defaultBodyClassName = 'nc-modal__body';
    private defaultFooterClassName = 'nc-modal__footer';
    private defaultButtonClassName = 'nc-modal__button';
    private defaultButtonConfirmClassName = 'confirm';

    public decorate = (hook?: () => void) => {
        return (fn: () => void) => () => {
            if (hook) {
                hook();
            }
            fn();
        }
    }

    public renderModal = ({ onConfirm, onCancel }: NavigationConfirmChildData): React.ReactElement<{}> => {
        const {
            children = this.defaultChildren,
            confirmText = this.defaultConfirmText,
            cancelText = this.defaultCancelText,
            modalClassName = this.defaultModalClassName,
            backdropClassName = this.defaultBackdropClassName,
            contentClassName = this.defaultContentClassName,
            bodyClassName = this.defaultBodyClassName,
            footerClassName = this.defaultFooterClassName,
            buttonClassName = this.defaultButtonClassName,
            buttonConfirmClassName = this.defaultButtonConfirmClassName,

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
                        <button className={ `${buttonClassName} ${buttonConfirmClassName}` } onClick={ this.decorate(confirmHook)(onConfirm) }>{ confirmText }</button>
                        <button className={ buttonClassName } onClick={ this.decorate(cancelHook)(onCancel) }>{ cancelText }</button>
                    </div>
                </div>
                    
            </div>
        );
    }

    public render() {
        return (
            <NavigationConfirmWithRouter>
                { this.renderModal }
            </NavigationConfirmWithRouter>
        );
    }
}

export type NavigationConfirmModalProps = IProps;