import * as React from 'react';

import { HashRouter as Router } from "react-router-dom";

import { AppLayout } from './layout/Layout';

class App extends React.Component {
  public render() {
    return (
      <Router>
        <AppLayout/>
      </Router>
    );
  }
}

export default App;
