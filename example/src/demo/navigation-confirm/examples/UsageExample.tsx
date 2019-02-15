import * as React from 'react';

import { Button, Modal, Row } from 'antd';
import { Link, Redirect, Route, Switch, withRouter } from 'react-router-dom';
import { HistoryListener, NavigationConfirm } from 'react-router-navigation-confirm';

import { ExampleBlock } from 'src/common';

const FirstPage = () => <div className="app_demo__page"><h1>Page #1</h1></div>;
const SecondPage = () => <div className="app_demo__page"><h1>Page #2</h1></div>;
const ThirdPage = () => <div className="app_demo__page"><h1>Page #3</h1></div>;

export const UsageExample = withRouter(({ match }: any) => {
    return (
        <ExampleBlock>
            <p><b>Try to click buttons below to navigate and show navigation confirm dialog...</b></p>
            <Link to={ `${match.url}/1` }><Button shape="round">#1</Button></Link>{' '}
            <Link to={ `${match.url}/2` }><Button shape="round">#2</Button></Link>{' '}
            <Link to={ `${match.url}/3` }><Button shape="round">#3</Button></Link>
            <Switch>
                <Route path={ `${match.url}/1` } component={ FirstPage }/>
                <Route path={ `${match.url}/2` } component={ SecondPage }/>
                <Route path={ `${match.url}/3` } component={ ThirdPage }/>
                <Redirect to={ `${match.url}/1` }/>
            </Switch>

            <ExampleBlock.Code>{ CODE_EXAMPLE }</ExampleBlock.Code>
            <ExampleBlock.Description>
                <p>Navigation confirm usage example.</p>
                <p>
                    You also can put function as prop <code className="inline">children</code> or simply put it as child element of <code className="inline">{ '<NavigationConfirm/>' }</code>.
                </p>
            </ExampleBlock.Description>

            <HistoryListener/>
            <NavigationConfirm>
                {
                    ({ onConfirm, onCancel }: any) => (
                        <Modal
                            visible={ true }
                            style={ { top: 20 } }
                            closable={ false }
                            footer={ null }
                            >
                            <p><b>Example of confirmation modal</b>. Are you sure you want to leave this page?</p>
                            <Row style={ { textAlign: 'right' } }>
                                <Button onClick={ onConfirm }>Confirm</Button> {' '}
                                <Button onClick={ onCancel }>Cancel</Button>
                            </Row>
                        </Modal>
                    )
                }
            </NavigationConfirm>
        </ExampleBlock>
    );
});

const CODE_EXAMPLE = `\
/* index.js */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link, Switch, Redirect } from 'react-router-dom';

import { NavigationConfirm, HistoryListener } from 'react-router-navigation-confirm';

import { MyModal } from './MyModal';

const FirstPage = () => <h1>Page #1</h1>;
const SecondPage = () => <h1>Page #2</h1>;
const ThirdPage = () => <h1>Page #3</h1>;

const App = () => (
    <div className="App">
        <Link to="/1"><button>#1</button></Link>
        <Link to="/2"><button>#2</button></Link>
        <Link to="/3"><button>#3</button></Link>
        <div>
            <Switch>
                <Route path="/1" component={FirstPage} />
                <Route path="/2" component={SecondPage} />
                <Route path="/3" component={ThirdPage} />
                <Redirect to="/1" />
            </Switch>
        </div>
        <NavigationConfirm>
            {
                ({ onConfirm, onCancel }) => (
                    <MyModal>
                        <p><b>Example of confirmation modal</b>. Are you sure you want to leave this page?</p>
                        <div><button onClick={ onConfirm }>Confirm</button><button onClick={ onCancel }>Cancel</button></div>
                    </MyModal>
                )
            }
        </NavigationConfirm>
    </div>
);

ReactDOM.render(
    <BrowserRouter>
        <div>
            <App />
            <HistoryListener/> 
        </div>
    </BrowserRouter>
    , document.getElementById('root')
);
`;
