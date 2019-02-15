import * as React from 'react';

import { Alert, Col, Row } from 'antd';

import { HistoryListenerAPI } from './HistoryListenerAPI';


export class HistoryListenerDemo extends React.Component {
    public render() {
        return (
            <Row className="app_demo" type="flex" align="middle" justify="center">
                <Col className="app_demo__code app_demo__col" span={ 20 }>
                    <h1>NavigationConfirm</h1>
                    <p>
                        Displays custom user component to confirm or reject navigation, allows user define more flexible
                        dialogs instead of react-router <code className="inline">{ '<Promt/>' }</code>.
                    </p>

                    <h2>When to use</h2>
                    <p>
                        When user needs confirmation on navigation, confirmation on leaving the page or on page reload
                        and user want to define his own behaviour for this action and dialog.
                    </p>
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

                    <h2>API</h2>
                    <HistoryListenerAPI/>
                </Col>
            </Row>
        )
    }
}