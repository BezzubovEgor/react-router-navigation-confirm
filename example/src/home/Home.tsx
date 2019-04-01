import * as React from 'react';

import { Button, Col, Layout, Row } from 'antd';
import { Link } from 'react-router-dom';

import { ROUTES_MAP } from '../router';

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
                <a href="https://travis-ci.com/BezzubovEgor/react-router-navigation-confirm" rel="nofollow"><img src="https://camo.githubusercontent.com/2a6b2d0c8765b31ce743145453f90d702d22cb04/68747470733a2f2f7472617669732d63692e636f6d2f42657a7a75626f7645676f722f72656163742d726f757465722d6e617669676174696f6e2d636f6e6669726d2e7376673f6272616e63683d6d6173746572" alt="Build Status" data-canonical-src="https://travis-ci.com/BezzubovEgor/react-router-navigation-confirm.svg?branch=master"/></a>
                <a href="https://opensource.org/licenses/MIT" rel="nofollow"><img src="https://camo.githubusercontent.com/3ccf4c50a1576b0dd30b286717451fa56b783512/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4c6963656e73652d4d49542d79656c6c6f772e737667" alt="License: MIT" data-canonical-src="https://img.shields.io/badge/License-MIT-yellow.svg"/></a>
                <a href="https://codecov.io/gh/BezzubovEgor/react-router-navigation-confirm" rel="nofollow"><img src="https://camo.githubusercontent.com/8c344ba8cb6d9d98a0f257af9b4a121ca90da720/68747470733a2f2f636f6465636f762e696f2f67682f42657a7a75626f7645676f722f72656163742d726f757465722d6e617669676174696f6e2d636f6e6669726d2f6272616e63682f6d61737465722f67726170682f62616467652e7376673f746f6b656e3d5841684e69424e326539" alt="codecov" data-canonical-src="https://codecov.io/gh/BezzubovEgor/react-router-navigation-confirm/branch/master/graph/badge.svg?token=XAhNiBN2e9"/></a>
            </Row>
        </Layout.Content>
    </Layout>
);
