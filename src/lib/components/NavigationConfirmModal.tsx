import * as React from 'react';
import { useCallback } from 'react';
import { NavigationConfirmChildData, WhenPropType } from '../types';
import { NavigationConfirm } from './NavigationConfirm';

import './NavigationConfirmModal.css';

export interface NavigationConfirmModalProps {
    children?: React.ReactNode;
    confirmText?: string;
    cancelText?: string;
    modalClassName?: string;
    backdropClassName?: string;
    contentClassName?: string;
    bodyClassName?: string;
    footerClassName?: string;
    buttonClassName?: string;
    buttonConfirmClassName?: string;

    onConfirm?: () => void;
    onCancel?: () => void;

    when?: WhenPropType;
}

export const NavigationConfirmModal: React.FC<NavigationConfirmModalProps> = ({
    children = 'Are you sure you want to leave this page?',
    backdropClassName = 'nc-modal__backdrop',
    bodyClassName = 'nc-modal__body',
    contentClassName = 'nc-modal__content',
    footerClassName = 'nc-modal__footer',
    modalClassName = 'nc-modal',
    buttonClassName = 'nc-modal__button',
    buttonConfirmClassName = 'confirm',
    cancelText = 'Cancel',
    confirmText = 'Confirm',
    onConfirm: confirmHook,
    onCancel: cancelHook,
    when,
}) => {
    const renderModal = useCallback(({ onConfirm, onCancel }: NavigationConfirmChildData) => {
        const handleConfirm = () => {
            if (confirmHook) confirmHook();
            onConfirm();
        };

        const handleCancel = () => {
            if (cancelHook) cancelHook();
            onCancel();
        };

        return (
            <div className={modalClassName}>
                <div className={backdropClassName} />
                <div className={contentClassName}>
                    <div className={bodyClassName}>{children}</div>
                    <div className={footerClassName}>
                        <button className={`${buttonClassName} ${buttonConfirmClassName}`} onClick={handleConfirm}>
                            {confirmText}
                        </button>
                        <button className={buttonClassName} onClick={handleCancel}>
                            {cancelText}
                        </button>
                    </div>
                </div>
            </div>
        );
    }, [
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
        confirmHook,
        cancelHook,
    ]);

    return (
        <NavigationConfirm when={when}>
            {renderModal}
        </NavigationConfirm>
    );
};
