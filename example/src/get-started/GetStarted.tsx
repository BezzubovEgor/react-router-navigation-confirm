import * as React from 'react';

import { Col, Layout, Row } from 'antd';

import { CodeBlock } from '../common';

export const GetStarted = () => (
    <Layout>
        <Layout.Content>
            <Row type="flex" align="middle" justify="center">
                <Col span={ 16 } className="p-15px">
                    <h1>Getting Started</h1>
                    <p>
                        <b>React-router-navigation-confirm</b> is a JavaScript library built on top of
                        the <a href="https://reactjs.org/">React</a> and <a href="https://reacttraining.com/react-router/">React-Router</a> for display
                        a custom dialog on navigation events.
                        It is more flexible solution to prevent navigation than default react-router <code className="inline">Prompt</code>.
                    </p>

                    <h2>Installation</h2>

                    <CodeBlock>
                        {`
$ npm install --save react-router-navigation-confirm
$ yarn add react-router-navigation-confirm`
                        }
                    </CodeBlock>
                    
                    <h2>General Usage</h2>

                    <h3>Basic example</h3>
                    <p>
                        To show confirmation dialog on every navigation you only need to include <code className="inline">{ '<HistoryListener/>' }</code>
                        to the root router of your app and <code className="inline">{ '<NavigationConfirmModal/>' }</code>
                        to any Route in which you want to display confirmation dialog:
                    </p>
                    <CodeBlock>
                        {`
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { NavigationConfirmModal, HistoryListener } from 'react-router-navigation-confirm';

import App from './App';


ReactDOM.render(
    <BrowserRouter>
        <div>
            <NavigationConfirmModal/>
            <HistoryListener/>
            <App />
        </div>
    </BrowserRouter>
    , document.getElementById('root')
);`
                        }
                    </CodeBlock>

                    <h3>Custom dialog</h3>
                    <p>If you want to create custom dialog you can use <code className="inline">NavigationConfirm</code> confirm component:</p>
                    <CodeBlock>
                        {`
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { NavigationConfirm, HistoryListener } from 'react-router-navigation-confirm';

import App from './App';

const children = ({ onConfirm, onCancel }) => (
    <div>
        <button onClick={ onConfirm }>Confirm</button>
        <button onClick={ onCancel }>Cancel</button>
    </div>
)


ReactDOM.render(
    <BrowserRouter>
        <div>
            <HistoryListener/>
            <NavigationConfirm>
                { children }
            </NavigationConfirm>
            <App />
        </div>
    </BrowserRouter>
    , document.getElementById('root')
);`
                        }
                    </CodeBlock>
                </Col>
            </Row>
        </Layout.Content>
    </Layout>
);