import * as React from 'react';

import { Alert, Col, Row } from 'antd';
import { Link } from 'react-router-dom';

import { DEMO_URLS } from '../routes';
import { CustomButtonsExample, CustomChildExample, CustomStylesExample, HandlersExample, SimpleUsageExample } from './examples';
import { NavigationConfirmModalAPI } from './NavigationConfirmModalAPI';


export const NavigationConfirmModalDemo = () => {
    return (
        <Row className="app_demo" type="flex" align="middle" justify="center">
            <Col className="app_demo__code app_demo__col" span={ 20 }>
                <h1>NavigationConfirmModal</h1>
                <p>Displays modal dialog to confirm or reject navigation.</p>

                <h2>When to use</h2>
                <p>When user needs confirmation on navigation, confirmation on leaving the page or on page reload.</p>
                <Alert message={
                        <span>
                        By default this component does not support forward navigation action (e.g. browser forward button),
                        you should use <code className="inline"><Link to={ `./${DEMO_URLS.HISTORY_LISTENER.path}` }>{ '<HistoryListener/>' }</Link></code>.
                    </span>
                    }
                    type="warning"
                />

                <h2>Examples</h2>
                <Row gutter={ 16 }>
                    <Col span={ 12 }>
                        <SimpleUsageExample />
                        <CustomStylesExample />
                        <HandlersExample />
                    </Col>
                    <Col span={ 12 }>
                        <CustomChildExample />
                        <CustomButtonsExample />
                    </Col>
                </Row>

                <h2>API</h2>
                <NavigationConfirmModalAPI/>
            </Col>
        </Row>
    )
};
