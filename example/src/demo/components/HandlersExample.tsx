import { HistoryListener, NavigationConfirmModal } from 'react-router-navigation-confirm';
import { ExampleBlock, ExampleRoutes, InlineCode } from 'src/common/components';

export const HandlersExample = () => {
    const onCancel = () => alert('onCancel handler');
    const onConfirm = () => alert('onConfirm handler');

    return (
        <ExampleBlock>
            <p><b>Try to click buttons below to navigate and show navigation confirm dialog...</b></p>
            <ExampleRoutes />

            <ExampleBlock.Code>{ CODE_EXAMPLE }</ExampleBlock.Code>

            <ExampleBlock.Description>
                Example of <InlineCode>onCancel</InlineCode> and <InlineCode>onConfirm</InlineCode> handlers
            </ExampleBlock.Description>

            <HistoryListener>
                <NavigationConfirmModal
                    onCancel={ onCancel }
                    onConfirm={ onConfirm } />
            </HistoryListener>
        </ExampleBlock>
    );
};

const CODE_EXAMPLE = `\
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link, Switch, Redirect } from 'react-router-dom';

import { NavigationConfirmModal, HistoryListener } from 'react-router-navigation-confirm';

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
        {
            /**
             * You can use NavigationConfirmModal component on any route you want
             */
        }
        <NavigationConfirmModal
            onCancel={ () => alert('onCancel handler') }
            onConfirm={ () => alert('onConfirm handler') } />
    </div>
);

ReactDOM.render(
    <BrowserRouter>
        <div>
            <HistoryListener>
                <App />
                {
                    /**
                     * You need to pass History listener to root router component, not to nested routes
                     */
                }
            </HistoryListener>
        </div>
    </BrowserRouter>
    , document.getElementById('root')
);
`;
