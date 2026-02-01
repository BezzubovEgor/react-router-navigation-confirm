import { useCallback, useEffect, useState, useContext } from 'react';
import { useLocation, UNSAFE_NavigationContext as NavigationContext, useBlocker } from 'react-router-dom';
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
  const context = useContext(NavigationContext);
  const navigator = context ? context.navigator : null;

  const shouldBlock = useCallback((_nextLoc: any) => {
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

  // Try to use Data Router Blocker if available
  let blocker: any = null;
  try {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    blocker = useBlocker(({ nextLocation: _nextLoc }) => shouldBlock(_nextLoc));
  } catch {
    // Not in a data router
  }

  useEffect(() => {
    if (blocker && blocker.state === 'blocked' && !isOpen) {
      setIsOpen(true);
    }
  }, [blocker, isOpen]);

  // Fallback for non-data routers (legacy/UNSAFE approach)
  useEffect(() => {
    if (blocker || confirmed || !navigator || !('block' in navigator)) return;

    const unblock = (navigator as any).block((tx: any) => {
      if (shouldBlock(tx.location)) {
        setNextLocation(tx);
        setIsOpen(true);
      } else {
        tx.retry();
      }
    });

    return unblock;
  }, [navigator, shouldBlock, confirmed, blocker]);

  const onConfirm = useCallback(() => {
    if (blocker && blocker.proceed) {
      blocker.proceed();
    }
    setConfirmed(true);
    setIsOpen(false);
    if (nextLocation) {
      nextLocation.retry();
    }
  }, [nextLocation, blocker]);

  const onCancel = useCallback(() => {
    if (blocker && blocker.reset) {
      blocker.reset();
    }
    setIsOpen(false);
    setNextLocation(null);
  }, [blocker]);

  return {
    isActive: !!when,
    isOpen,
    onConfirm,
    onCancel,
  };
};
