import * as React from 'react';


import { HistoryListener, NavigationConfirmModal } from 'react-router-navigation-confirm';

import { ExampleBlock, ExampleRoutes, InlineCode } from 'src/common/components';

import './CustomButtonsExample.css'


export const CustomButtonsExample = () => {
    return (
        <ExampleBlock>
            <p><b>Try to click buttons below to navigate and show navigation confirm dialog...</b></p>
            <ExampleRoutes />

            <ExampleBlock.Code>{ CODE_EXAMPLE }</ExampleBlock.Code>

            <ExampleBlock.Description>
                <p>Custom buttons example.</p>
                <p>
                    You can use your own classes for buttons, you should provide <InlineCode>buttonClassName</InlineCode>
                    and <InlineCode>buttonConfirmClassName</InlineCode> props to change styles.
                    Also you can specify text for these buttons
                    using <InlineCode>confirmText</InlineCode> and <InlineCode>cancelText</InlineCode> props.
                </p>
            </ExampleBlock.Description>

            <HistoryListener>
                <NavigationConfirmModal
                    confirmText="Yes"
                    cancelText="No"
                    buttonClassName="btn-class"
                    buttonConfirmClassName="btn-class-confirm" />
            </HistoryListener>
        </ExampleBlock>
    );
};

const CODE_EXAMPLE = `\
/* App.css */
.btn-class {
    background: white;
    border: none;
    margin: 5px;
    min-width: 75px;
    padding: 5px;
    border-radius: 20px;
    box-shadow: 0 2px 3px grey;
    cursor: pointer;
    outline: none;
}

.btn-class:hover {
    box-shadow: 0 3px 6px grey;
}

.btn-class-confirm {
    background: #1890ff;
    font-weight: bold;
    color: white;
}

/* index.js */
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
        confirmText="Yes"
        cancelText="No"
        buttonClassName="btn-class"
        buttonConfirmClassName="btn-class-confirm"
        />
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
