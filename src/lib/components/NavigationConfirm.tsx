import * as React from 'react';

import { Action, Location, TransitionPromptHook } from 'history';
import { RouteComponentProps, withRouter } from 'react-router-dom';

import { withHistoryService } from '../hocs';
import { HistoryService } from '../services';
import { NavigationConfirmChildren, WhenPropType } from '../types';
import { noop } from '../utils';


interface IProps extends RouteComponentProps {
    unloadMsg?: string;
    children: NavigationConfirmChildren;
    when?: WhenPropType;
    historyService: HistoryService,
}

interface IState {
    isActive: boolean,
    isOpen: boolean;

    action: Action,
    nextLocation: Location,

    hasError: boolean,
}

class NavigationConfirm extends React.Component<IProps, IState> {
    public static defaultProps = {
        unloadMsg: 'msg',
        when: true,
    }

    public state: IState = {
        isActive: true,
        isOpen: false,

        action: 'PUSH',
        nextLocation: { pathname: '/', search: '', state: '', hash: '' },

        hasError: false,
    }

    public unblock: () => void = noop;
    public unlisten: () => void = noop;

    public componentDidMount() {
        const { block, listen } = this.props.history;
        this.unblock = block(this.block);
        this.unlisten = listen(this.reblock);
        window.addEventListener('beforeunload', this.onBeforeUnload);
    }

    public componentWillUnmount() {
        this.unblock();
        this.unlisten();
        window.removeEventListener('beforeunload', this.onBeforeUnload);
    }

    public block: TransitionPromptHook = (nextLocation: Location, action: Action): false | void => {
        if (this.shouldBlock(nextLocation)) {
            this.setState({ action, nextLocation }, this.open);
            return false;
        }
        return;
    }

    public reblock = () => {
        this.unblock();
        this.setState({ isActive: true }, () => {
            this.unblock = this.props.history.block(this.block);
        });
    }

    public navigate() {
        const { history, historyService } = this.props;
        const { action, nextLocation } = this.state;
        const historyFunction = historyService.getHistoryFunction(nextLocation, action);

        this.setState({ isActive: false, isOpen: false }, () => {
            history[historyFunction](nextLocation);
        });
    }

    public onBeforeUnload = (event: BeforeUnloadEvent) => {
        const { unloadMsg } = this.props;
        event.preventDefault();
        event.returnValue = unloadMsg;
        return unloadMsg;
    }

    public render() {
        const { children } = this.props;
        const { isActive, isOpen, hasError } = this.state;

        if (!isActive || !isOpen || hasError) {
            return null;
        }

        return children({
            onCancel: this.onCancel,
            onConfirm: this.onConfirm,
        });
    }

    private open = () => this.setState({ isOpen: true });
    private onConfirm = () => this.navigate();
    private onCancel = () => this.setState({ isOpen: false });

    private isTheSameLocation = (nextLocation: Location): boolean => nextLocation.pathname === this.props.location.pathname;
    private shouldBlock = (nextLocation: Location): boolean => this.state.isActive && this.shouldShow() && !this.isTheSameLocation(nextLocation);
    private shouldShow = (): boolean => {
        const { when, location, history, match } = this.props;
        if (typeof when === 'function') {
            return when(location, { location, history, match });
        }
        return !!when;
    }
}


const NavigationConfirmWithRouter = withRouter(withHistoryService(NavigationConfirm));


export {
    NavigationConfirm,
    NavigationConfirmWithRouter,

    IProps as NavigationConfirmProps,
    IState as NavigationConfirmState,
}