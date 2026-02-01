import * as React from 'react';
import { useEffect, useContext, useRef } from 'react';
import { useLocation, UNSAFE_NavigationContext as NavigationContext } from 'react-router-dom';
import { HistoryService } from '../services';

export const HistoryListenerContext = React.createContext<HistoryService | undefined>(undefined);

interface HistoryListenerProps {
    children?: React.ReactNode;
}

export const HistoryListener: React.FC<HistoryListenerProps> = ({ children }) => {
    const historyService = useRef(new HistoryService()).current;
    const location = useLocation();
    const { navigator } = useContext(NavigationContext);

    useEffect(() => {
        historyService.add((location as any).key);
    }, [location, historyService]);

    return (
        <HistoryListenerContext.Provider value={historyService}>
            {children || null}
        </HistoryListenerContext.Provider>
    );
};

export const HistoryListenerWithRouter = HistoryListener;
