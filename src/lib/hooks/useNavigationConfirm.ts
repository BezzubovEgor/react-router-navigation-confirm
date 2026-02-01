import { useCallback, useEffect, useState, useContext } from 'react';
import { useLocation, UNSAFE_NavigationContext as NavigationContext } from 'react-router-dom';
import { isFunction } from '../utils';
import { WhenPropType } from '../types';

export interface NavigationConfirmHookResult {
  isActive: boolean;
  isOpen: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

export const useNavigationConfirm = (when: WhenPropType = true, unloadMsg: string = 'Are you sure you want to leave this page?'): NavigationConfirmHookResult => {
  const [isOpen, setIsOpen] = useState(false);
  const [nextLocation, setNextLocation] = useState<any>(null);
  const [confirmed, setConfirmed] = useState(false);

  const location = useLocation();
  const { navigator } = useContext(NavigationContext);

  const shouldBlock = useCallback((nextLoc: any) => {
    if (confirmed) return false;
    
    if (isFunction(when)) {
      return when(location as any, { location } as any);
    }
    return !!when;
  }, [when, location, confirmed]);

  // Handle BeforeUnload
  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      if (when) {
        event.preventDefault();
        event.returnValue = unloadMsg;
        return unloadMsg;
      }
      return undefined;
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [when, unloadMsg]);

  // Handle RR6 Blocker
  useEffect(() => {
    if (confirmed) return;

    const unblock = (navigator as any).block((tx: any) => {
      if (shouldBlock(tx.location)) {
        setNextLocation(tx);
        setIsOpen(true);
      } else {
        tx.retry();
      }
    });

    return unblock;
  }, [navigator, shouldBlock, confirmed]);

  const onConfirm = useCallback(() => {
    setConfirmed(true);
    setIsOpen(false);
    if (nextLocation) {
      nextLocation.retry();
    }
  }, [nextLocation]);

  const onCancel = useCallback(() => {
    setIsOpen(false);
    setNextLocation(null);
  }, []);

  return {
    isActive: !!when,
    isOpen,
    onConfirm,
    onCancel,
  };
};
