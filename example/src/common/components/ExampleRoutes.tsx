
import * as React from 'react';

import { Button } from 'antd';
import { Link, Redirect, Route, Switch, withRouter } from 'react-router-dom';


const FirstPage = () => <div className="app_demo__page"><h1>Page #1</h1></div>;
const SecondPage = () => <div className="app_demo__page"><h1>Page #2</h1></div>;
const ThirdPage = () => <div className="app_demo__page"><h1>Page #3</h1></div>;

const ExampleRoutes = withRouter(({ match }: any) => (
    <>
        <Link to={ `${match.url}/1` }><Button shape="round">#1</Button></Link>{' '}
        <Link to={ `${match.url}/2` }><Button shape="round">#2</Button></Link>{' '}
        <Link to={ `${match.url}/3` }><Button shape="round">#3</Button></Link>
        <Switch>
            <Route path={ `${match.url}/1` } component={ FirstPage }/>
            <Route path={ `${match.url}/2` } component={ SecondPage }/>
            <Route path={ `${match.url}/3` } component={ ThirdPage }/>
            <Redirect to={ `${match.url}/1` }/>
        </Switch>
    </>
));


export {
    ExampleRoutes,
};
