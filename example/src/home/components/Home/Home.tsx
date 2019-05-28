import * as React from 'react';

import { Button, Col, Layout, Row } from 'antd';
import { Link } from 'react-router-dom';

import { ROUTES_MAP } from 'src/routes';
import { CIInfo } from '../CIInfo';
import { CoverageInfo } from '../CoverageInfo';
import { LicenceInfo } from '../LicenceInfo';

import './Home.css';


export const Home = () => (
    <Layout>
        <Layout.Content className="home">
            <Row type="flex" align="middle" justify="center">
                <Col span={ 3 }>
                    <img src={ `${process.env.PUBLIC_URL}/logo.png` } alt="Logo" className="large-logo" width="100%"/>
                </Col>
            </Row>
            <Row type="flex" align="middle" justify="center" className="section">
                <Col span={ 12 }>
                    <h1>React Router Navigation Confirm</h1>
                </Col>
            </Row>
            <Row type="flex" align="middle" justify="center">
                <Link to={ ROUTES_MAP.GET_STARTED.path }><Button className="btn btn-primary" size="large" type="primary" href="">Get started</Button></Link>
                <Link to={ ROUTES_MAP.DEMO.path }><Button className="btn" size="large">Live examples & docs</Button></Link>
            </Row>
            <Row type="flex" align="middle" justify="center" className="section metrics">
                <CIInfo />
                <LicenceInfo />
                <CoverageInfo />
            </Row>
        </Layout.Content>
    </Layout>
);
