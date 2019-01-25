import * as React from 'react';

import { History, Location, TransitionPromptHook } from 'history';
import { withRouter } from 'react-router-dom';

import { HISTORY_SERVICE } from './history-service';

interface IProps {
    unloadMsg: string;
    history: History;
    children: (data: IChildData) => React.ReactNode;
}

interface IState {
    isActive: boolean,
    isOpen: boolean;

    action: any,
    nextLocation: Location,

    unblock: () => void;
    unlisten: () => void;
}

interface IChildData {
    onCancel: () => void;
    onConfirm: () => void;
}

export class NavigationConfirm extends React.Component<IProps, IState> {
    public static defaultProps = {
        unloadMsg: '',
    }

    public state = {
        isActive: true,
        isOpen: false,

        action: 'PUSH',
        nextLocation: { pathname: '/', search: '', state: '', hash: '' },

        unblock: () => {/* */},
        unlisten: () => {/* */},
    }

    constructor(props: any) {
        super(props);
    }

    public componentDidMount() {
        const { block, listen } = this.props.history;
        this.setState({
            unblock: block(this.block),
            unlisten: listen(this.reblock),
        });
        window.addEventListener('beforeunload', this.onBeforeUnload);
    }

    public componentWillUnmount() {
        this.state.unblock();
        this.state.unlisten();
        window.removeEventListener('beforeunload', this.onBeforeUnload);
    }

    public block: TransitionPromptHook = (nextLocation: any, action: any): false | void => {
        if (this.state.isActive) {
            this.setState({ action, nextLocation }, this.open);
            return false;
        }
        return;
    }

    public reblock = () => {
        this.state.unblock();
        this.setState({
            isActive: true,
            unblock: this.props.history.block(this.block),
        });
    }

    public navigate() {
        const { history } = this.props;
        const { action, nextLocation } = this.state;
        const historyFunction = this.getHistoryFunction(nextLocation, action);

        this.setState({ isActive: false, isOpen: false }, () => {
            history[historyFunction](nextLocation);
        });
    }

    public getHistoryFunction = (location: Location, action: string): string => {
        return {
            POP: () => HISTORY_SERVICE.isForward(location.key) ? 'goForward' : 'goBack',
            PUSH: () => 'push',
            REPLACE: () => 'replace'
        }[action]();
    }

    public onBeforeUnload = (event: any) => {
        event.preventDefault();
        const msg = 'msg';
        event.returnValue = msg;
        return msg;
    }

    public toggle = (isOpen = !this.state.isOpen) => this.setState({ isOpen });

    public open = () => this.toggle(true);

    public onConfirm = () => this.navigate();

    public onCancel = () => this.toggle(false);

    public render() {
        if (!this.state.isActive || !this.state.isOpen) {
            return null;
        }
        return this.props.children({
            onCancel: this.onCancel,
            onConfirm: this.onConfirm,
        });
    }
}

export type NavigationConfirmChildData = IChildData;
export type NavigationConfirmProps = IProps;
export const NavigationConfirmWithRouter = withRouter(NavigationConfirm);
