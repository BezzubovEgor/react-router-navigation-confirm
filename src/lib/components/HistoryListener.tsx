import * as React from 'react';

import { History, Location } from 'history';
import { RouteComponentProps, withRouter } from 'react-router-dom';

import { HistoryService } from '../services';
import { noop } from '../utils';


const HistoryListenerContext = React.createContext<HistoryService | undefined>(undefined);

interface IProps extends RouteComponentProps {
    children?: React.ReactNode;
}

class HistoryListener extends React.Component<IProps, {}> {
    public historyService = new HistoryService();
    public unlisten: () => void = noop;

    public componentDidMount() {
        this.unlisten = this.props.history.listen(this.listen)
    }

    public componentWillUnmount() {
        this.unlisten();
    }

    public listen: History.LocationListener = (location: Location) => {
        this.historyService.add(location.key);
    }

    public render() {
        const { children } = this.props;
        return (
            <HistoryListenerContext.Provider value={ this.historyService }>
                { children === undefined ? null : children }
            </HistoryListenerContext.Provider>
        );
    }
}

const HistoryListenerWithRouter = withRouter(HistoryListener);

export {
    HistoryListener,
    HistoryListenerWithRouter,
    HistoryListenerContext,
    IProps as HistoryStoreProps,
}
