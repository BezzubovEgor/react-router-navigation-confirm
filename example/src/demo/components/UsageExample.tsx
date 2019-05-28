import * as React from 'react';

import { HistoryListener, NavigationConfirm } from 'react-router-navigation-confirm';

import { ExampleBlock, ExampleRoutes, InlineCode } from 'src/common/components';
import { ConfirmationModal } from './ConfirmationModal';

export const UsageExample = () => {
    return (
        <ExampleBlock>
            <p><b>Try to click buttons below to navigate and show navigation confirm dialog...</b></p>
            <ExampleRoutes />

            <ExampleBlock.Code>{ CODE_EXAMPLE }</ExampleBlock.Code>
            <ExampleBlock.Description>
                <p>Navigation confirm usage example.</p>
                <p>
                    You also can put function as prop <InlineCode>children</InlineCode> or
                    simply put it as child element of<InlineCode>{ '<NavigationConfirm/>' }</InlineCode>.
                </p>
            </ExampleBlock.Description>

            <HistoryListener>
                <NavigationConfirm>
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
        <NavigationConfirm>
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
