import * as React from 'react';

import { HistoryListener, NavigationConfirmModal } from 'react-router-navigation-confirm';

import { ExampleBlock, ExampleRoutes } from 'src/common';

import './styles/CustomStylesExample.css'


export const CustomStylesExample = () => {
    return (
        <ExampleBlock>
            <p><b>Try to click buttons below to navigate and show navigation confirm dialog...</b></p>
            <ExampleRoutes />

            <ExampleBlock.Code>{ CODE_EXAMPLE }</ExampleBlock.Code>
            <ExampleBlock.Description>
                <p>Example of confirmation modal dialog with custom styles.</p>
                <p>
                    You can use custom class names for different parts of <code className="inline">NavigationConfirmModal</code>.
                    For example to change footer styles yo can use <code className="inline">footerClassName</code>,
                    to change body of modal - <code className="inline">bodyClassName</code>.
                    Also you can provide next props: <code className="inline">modalClassName</code>,
                    <code className="inline">backdropClassName</code>,
                    <code className="inline">contentClassName</code>
                </p>
            </ExampleBlock.Description>

            <HistoryListener>
                <NavigationConfirmModal
                    modalClassName="nc-modal modal-class"
                    backdropClassName="nc-modal__backdrop backdrop-class"
                    contentClassName="nc-modal__content content-class"
                    bodyClassName="nc-modal__body body-class"
                    footerClassName="nc-modal__footer footer-class" />
            </HistoryListener>
        </ExampleBlock>
    );
};

const CODE_EXAMPLE = `\
/* App.css */
.modal-class {
    opacity: 0.9;
}

.backdrop-class {
    background-color: white;
}

.content-class {
    max-width: 700px;
}

.body-class {
    padding: 40px;
    font-size: 20px;
    text-align: center;
}

.footer-class {
    text-align: center;
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
            modalClassName="nc-modal modal-class"
            backdropClassName="nc-modal__backdrop backdrop-class"
            contentClassName="nc-modal__content content-class"
            bodyClassName="nc-modal__body body-class"
            footerClassName="nc-modal__footer footer-class"
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
