import * as React from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { HistoryService } from '../services';

export const HistoryListenerContext = React.createContext<HistoryService | undefined>(undefined);

interface HistoryListenerProps {
    children?: React.ReactNode;
}

export const HistoryListener: React.FC<HistoryListenerProps> = ({ children }) => {
    const historyService = React.useMemo(() => new HistoryService(), []);
    const location = useLocation();

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
