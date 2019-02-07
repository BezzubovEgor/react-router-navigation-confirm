import * as React from 'react';

import { Alert, Button, Col, Row } from 'antd';

import { Link, Redirect, Route, Switch } from 'react-router-dom';
import { HistoryListener, NavigationConfirmModal } from 'react-router-navigation-confirm';

import { ExampleBlock } from '../../common/ExampleBlock';
import { NAVIGATION_CONFIRM_MODAL_CODE_EXAMPLE } from './data';


const FirstPage = () => <div className="app_demo__page"><h1>Page #1</h1></div>;
const SecondPage = () => <div className="app_demo__page"><h1>Page #2</h1></div>;
const ThirdPage = () => <div className="app_demo__page"><h1>Page #3</h1></div>;


export class NavigationConfirmModalDemo extends React.Component {
    public render() {
        const match = (this.props as any).match;
        return (
            <>
                <Row className="app_demo" type="flex" align="middle" justify="center">
                    <Col className="app_demo__code app_demo__col" span={ 20 }>
                        <h1>NavigationConfirmModal</h1>
                        <p>Displays modal dialog to confirm or reject navigation.</p>

                        <h2>When to use</h2>
                        <p>When user needs confirmation on navigation, confirmation on leaving the page or on page reload.</p>
                        <Alert message={
                                <span>
                                    If used with HashRouter then does not support forward browser button, it always will work as back button.
                                    <code className="inline">{ '<HashRouter>' }</code> does not add the <code className="inline">key</code>
                                    property to locations but this component use <code className="inline">key</code> to handle navigation directions.
                                    The reason for this is that hash history doesn't use <code className="inline">history.(push|replace)State</code>
                                    to switch the location (it just uses <code className="inline">window.location.replace</code>).
                                </span>
                            }
                            type="warning"
                        />

                        <h2>Examples</h2>
                        <ExampleBlock>
                            <Link to={ `${match.url}/1` }><Button shape="round">Navigate to page #1</Button></Link>{' '}
                            <Link to={ `${match.url}/2` }><Button shape="round">Navigate to page #2</Button></Link>{' '}
                            <Link to={ `${match.url}/3` }><Button shape="round">Navigate to page #3</Button></Link>
                            <Switch>
                                <Route path={ `${match.url}/1` } component={ FirstPage }/>
                                <Route path={ `${match.url}/2` } component={ SecondPage }/>
                                <Route path={ `${match.url}/3` } component={ ThirdPage }/>
                                <Redirect to={ `${match.url}/1` }/>
                            </Switch>

                            <ExampleBlock.Code>{ NAVIGATION_CONFIRM_MODAL_CODE_EXAMPLE }</ExampleBlock.Code>
                            <ExampleBlock.Description><span>Example of confirmation modal dialog</span></ExampleBlock.Description>
                        </ExampleBlock>

                        <h2>API</h2>
                    </Col>
                </Row>
                <HistoryListener/>
                <NavigationConfirmModal/>
            </>
        )
    }
}