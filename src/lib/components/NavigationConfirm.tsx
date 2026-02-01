import * as React from 'react';
import { useNavigationConfirm } from '../hooks/useNavigationConfirm';
import { NavigationConfirmChildren, WhenPropType } from '../types';

export interface NavigationConfirmProps {
    unloadMsg?: string;
    children: NavigationConfirmChildren;
    when?: WhenPropType;
}

export const NavigationConfirm: React.FC<NavigationConfirmProps> = ({
    children,
    when = true,
    unloadMsg = 'Are you sure you want to leave this page?',
}) => {
    const { isOpen, onConfirm, onCancel } = useNavigationConfirm(when, unloadMsg);

    if (!isOpen) {
        return null;
    }

    return (
        <>
            {children({
                onCancel,
                onConfirm,
            })}
        </>
    );
};

export const NavigationConfirmWithRouter = NavigationConfirm;
