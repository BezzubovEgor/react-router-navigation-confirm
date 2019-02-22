import * as React from 'react';

import { Alert, Col, Row } from 'antd';
import { Link, withRouter } from 'react-router-dom';

import { DEMO_URLS } from '../routes';
import { UsageExample } from './examples/UsageExample';
import { NavigationConfirmAPI } from './NavigationConfirmAPI';


export const NavigationConfirmDemo = withRouter(({ match }) => (
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
                        By default this component does not support forward navigation action (e.g. browser forward button), you can use <code className="inline"><Link to={ `./${DEMO_URLS.historyListener.path}` }>{ '<HistoryListener/>' }</Link></code>.
                    </span>
                }
                type="warning"
            />

            <h2>Examples</h2>
            <Row gutter={ 16 }>
                <Col span={ 12 }>
                    <UsageExample/>
                </Col>
            </Row>

            <h2>API</h2>
            <NavigationConfirmAPI/>
        </Col>
    </Row>
));