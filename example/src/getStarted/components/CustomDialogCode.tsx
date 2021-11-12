
import { CodeBlock } from 'src/common/components';

export const CustomDialogCode = () => (
    <CodeBlock>
        {`
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { NavigationConfirm, HistoryListener } from 'react-router-navigation-confirm';

import App from './App';

const children = ({ onConfirm, onCancel }) => (
<div>
<button onClick={ onConfirm }>Confirm</button>
<button onClick={ onCancel }>Cancel</button>
</div>
)


ReactDOM.render(
<BrowserRouter>
<div>
<HistoryListener>
    <NavigationConfirm when={ true }>
        { children }
    </NavigationConfirm>
    <App />
<HistoryListener>
</div>
</BrowserRouter>
, document.getElementById('root')
);`
        }
    </CodeBlock>
);
