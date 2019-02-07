export const NAVIGATION_CONFIRM_MODAL_CODE_EXAMPLE = `\
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link, Switch, Redirect } from 'react-router-dom';

import { NavigationConfirmModal, HistoryListener } from 'react-router-navigation-confirm';

const FirstPage = () => <h1>Page #1</h1>;
const SecondPage = () => <h1>Page #2</h1>;
const ThirdPage = () => <h1>Page #3</h1>;

const App = () => (
    <div className="App">
        <Link to="/1"><button>Navigate to page #1</button></Link>
        <Link to="/2"><button>Navigate to page #2</button></Link>
        <Link to="/3"><button>Navigate to page #3</button></Link>
        <div>
            <Switch>
                <Route path="/1" component={FirstPage} />
                <Route path="/2" component={SecondPage} />
                <Route path="/3" component={ThirdPage} />
                <Redirect to="/1" />
            </Switch>
        </div>
        {
            /**
             * You can use NavigationConfirmModal component on any route you want
             */
        }
        <NavigationConfirmModal/>
    </div>
);

ReactDOM.render(
    <BrowserRouter>
        <div>
            <App />
            {
                /**
                 * You need to pass History listener to root router component, not to nested routes
                 */
            }
            <HistoryListener/> 
        </div>
    </BrowserRouter>
    , document.getElementById('root')
);
`;