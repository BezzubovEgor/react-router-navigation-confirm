import * as React from 'react';

import { History, Location } from 'history';
import { match, withRouter } from 'react-router-dom';

import { HISTORY_SERVICE } from './history-service';

interface IProps {
    history: History;
    location: Location;
    match: match;
    children: React.ReactNode;
}

interface IState {
    unlisten: () => void;
}

export class HistoryListener extends React.Component<IProps, IState> {
    public componentDidMount() {
        this.setState({ unlisten: this.props.history.listen(this.listen) });
    }

    public componentWillUnmount() {
        this.state.unlisten();
    }

    public listen: History.LocationListener = (location: Location) => {
        HISTORY_SERVICE.add(location.key);
    }

    public render() {
        return null;
    }
}

export type HistoryStoreProps = IProps;
export type HistoryStoreState = IState;
export const HistoryListenerWithRouter = withRouter(HistoryListener);
