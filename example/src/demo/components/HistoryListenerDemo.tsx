import { Alert, Col, Row } from 'antd';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { InlineCode } from 'src/common/components';

import { DEMO_URLS } from '../routes';
import { HistoryListenerAPI } from './HistoryListenerAPI';

export class HistoryListenerDemo extends React.Component {
    public render() {
        return (
            <Row className="app_demo" align="middle" justify="center">
                <Col className="app_demo__code app_demo__col" span={ 20 }>
                    <h1>HistoryListener</h1>
                    <p>
                        This provider-component start listen navigation actions of <a href="https://reacttraining.com/react-router/">react-router</a> and
                        store order of this actions to support back and forward actions in right way.
                        You shold put <InlineCode/>
                        <InlineCode>
                            <Link to={ `./${DEMO_URLS.NAVIGATION_CONFIRM.path}` }>{ '<NavigationConfirm>' }</Link>
                        </InlineCode> or <InlineCode>
                            <Link to={ `./${DEMO_URLS.NAVIGATION_CONFIRM_MODAL.path}` }>{ '<NavigationConfirmModal>' }</Link>
                        </InlineCode> inside this component.
                    </p>

                    <h2>When to use</h2>
                    <p>
                        If you want everything to work.
                    </p>
                    <Alert message={
                            <span>
                                If used with HashRouter then does not support forward browser button, it always will work as back button.
                                <InlineCode>{ '<HashRouter>' }</InlineCode> does not add the <InlineCode>key</InlineCode>
                                property to locations but this component use <InlineCode>key</InlineCode> to handle navigation directions.
                                The reason for this is that hash history doesn't use <InlineCode>history.(push|replace)State</InlineCode>
                                to switch the location (it just uses <InlineCode>window.location.replace</InlineCode>).
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
