import * as React from 'react';

import { Location } from 'history';
import { HistoryListener, NavigationConfirm } from 'react-router-navigation-confirm';

import { ExampleBlock, ExampleRoutes, InlineCode } from 'src/common/components';
import { ConfirmationModal } from './ConfirmationModal';


export const WhenExample = () => {
    const when = (location: Location) => location.pathname.includes('/1');

    return (
        <ExampleBlock>
            <p><b>Try to click buttons below to navigate and show navigation confirm dialog, it will work only on page #1...</b></p>
            <ExampleRoutes />

            <ExampleBlock.Code>{ CODE_EXAMPLE }</ExampleBlock.Code>
            <ExampleBlock.Description>
                <p>Conditional render example.</p>
                <p>
                    You also can put simply <InlineCode>true</InlineCode> or <InlineCode>false</InlineCode> value
                    to the <InlineCode>when</InlineCode> prop.
                </p>
            </ExampleBlock.Description>

            <HistoryListener>
                <NavigationConfirm when={ when }>
                    { ConfirmationModal }
                </NavigationConfirm>
            </HistoryListener>
        </ExampleBlock>
    );
};

const CODE_EXAMPLE = `\
/* index.js */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link, Switch, Redirect } from 'react-router-dom';

import { NavigationConfirm, HistoryListener } from 'react-router-navigation-confirm';

import { MyModal } from './MyModal';

const FirstPage = () => <h1>Page #1</h1>;
const SecondPage = () => <h1>Page #2</h1>;
const ThirdPage = () => <h1>Page #3</h1>;

const App = () => (
    <div className="App">
        <Link to="/1"><button>#1</button></Link>
        <Link to="/2"><button>#2</button></Link>
        <Link to="/3"><button>#3</button></Link>
        <div>
            <Switch>
                <Route path="/1" component={FirstPage} />
                <Route path="/2" component={SecondPage} />
                <Route path="/3" component={ThirdPage} />
                <Redirect to="/1" />
            </Switch>
        </div>
        <NavigationConfirm when={ location => location.pathname.includes('/1') }>
            {
                ({ onConfirm, onCancel }) => (
                    <MyModal>
                        <p><b>Example of confirmation modal</b>. Are you sure you want to leave this page?</p>
                        <div><button onClick={ onConfirm }>Confirm</button><button onClick={ onCancel }>Cancel</button></div>
                    </MyModal>
                )
            }
        </NavigationConfirm>
    </div>
);

ReactDOM.render(
    <BrowserRouter>
        <div>
            <HistoryListener>
                <App />
            </HistoryListener>
        </div>
    </BrowserRouter>
    , document.getElementById('root')
);
`;
