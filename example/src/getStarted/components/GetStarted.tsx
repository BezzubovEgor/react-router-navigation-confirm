
import { Col, Layout, Row } from 'antd';
import { InlineCode } from 'src/common/components';

import { GeneralUsage } from './GeneralUsage';
import { Installation } from './Installation';

export const GetStarted = () => (
    <Layout>
        <Layout.Content>
            <Row align="middle" justify="center">
                <Col span={ 16 } className="p-15px">
                    <h1>Getting Started</h1>
                    <p>
                        <b>React-router-navigation-confirm</b> is a JavaScript library built on top of
                        the <a href="https://reactjs.org/">React</a> and <a href="https://reacttraining.com/react-router/">React-Router</a> for display
                        a custom dialog on navigation events.
                        It is more flexible solution to prevent navigation than default react-router <InlineCode>Prompt</InlineCode>.
                    </p>

                    <Installation />

                    <GeneralUsage />

                </Col>
            </Row>
        </Layout.Content>
    </Layout>
);
