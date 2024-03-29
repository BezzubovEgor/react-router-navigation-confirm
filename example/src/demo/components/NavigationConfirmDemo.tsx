import { Alert, Col, Row } from 'antd';
import { Link } from 'react-router-dom';
import { InlineCode } from 'src/common/components';

import { DEMO_URLS } from '../routes';
import { NavigationConfirmAPI } from './NavigationConfirmAPI';
import { UsageExample } from './UsageExample';
import { WhenExample } from './WhenExample';

export const NavigationConfirmDemo = () => (
    <Row className="app_demo" align="middle" justify="center">
        <Col className="app_demo__code app_demo__col" span={ 20 }>
            <h1>NavigationConfirm</h1>
            <p>
                Displays custom user component to confirm or reject navigation, allows user define more flexible
                dialogs instead of react-router <InlineCode>{ '<Promt/>' }</InlineCode>.
            </p>

            <h2>When to use</h2>
            <p>
                When user needs confirmation on navigation, confirmation on leaving the page or on page reload
                and user want to define his own behaviour for this action and dialog.
            </p>
            <Alert message={
                    <span>
                        By default this component does not support forward navigation action (e.g. browser forward button), you should
                        use <InlineCode><Link to={ `./${DEMO_URLS.HISTORY_LISTENER.path}` }>{ '<HistoryListener/>' }</Link></InlineCode>.
                    </span>
                }
                type="warning"
            />

            <h2>Examples</h2>
            <Row gutter={ 16 }>
                <Col span={ 12 }>
                    <UsageExample />
                </Col>
                <Col span={ 12 }>
                    <WhenExample />
                </Col>
            </Row>

            <h2>API</h2>
            <NavigationConfirmAPI />
        </Col>
    </Row>
);
