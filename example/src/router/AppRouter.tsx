import * as React from 'react';
import { Route } from 'react-router-dom';

import { Demo } from '../demo/Demo';

const Index = () => <h2>Home</h2>;
const Users = () => <h2>Users</h2>;

export const AppRouter = () => (
    <>
      <Route path="/" exact={ true } component={Index} />
      <Route path="/demo/" component={Demo} />
      <Route path="/users/" component={Users} />
    </>
);

export default AppRouter;