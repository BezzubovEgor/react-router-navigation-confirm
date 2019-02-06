import * as React from 'react';

import { Button, Card, Col, Row } from 'antd';

import { Link, Redirect, Route, Switch } from 'react-router-dom';
import { HistoryListener, NavigationConfirmModal } from 'react-router-navigation-confirm';

const FirstPage = () => <div>First page</div>;
const SecondPage = () => <div>Second page</div>

export class NavigationConfirmModalDemo extends React.Component {
    public render() {
        const match = (this.props as any).match;
        return (
            <>
                <Row className="app_demo" type="flex">
                    <Col className="app_demo__code app_demo__col" span={ 12 }>
                        <Link to={ `${match.url}/1` }><Button type="primary">ClickMe</Button></Link>
                        <Link to={ `${match.url}/2` }><Button type="primary">Primary</Button></Link>
                    </Col>
                    <Col className="app_demo__sample app_demo__col" span={ 12 }>
                        <Card
                            size="small"
                            title="Small size card"
                            style={{ minWidth: '100%' }}
                        >
                            <Switch>
                                <Redirect exact={ true } from={ match.url } to={ `${match.url}/1` }/>
                                <Route path={ `${match.url}/1` } component={ FirstPage }/>
                                <Route path={ `${match.url}/2` } component={ SecondPage }/>
                            </Switch>
                        </Card>
                    </Col>
                </Row>
                <HistoryListener/>
                <NavigationConfirmModal/>
            </>
        )
    }
}