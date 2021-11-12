
import { CodeBlock } from 'src/common/components';

export const BasicExampleCode = () => (
    <CodeBlock>
        {`
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { NavigationConfirmModal, HistoryListener } from 'react-router-navigation-confirm';

import App from './App';


ReactDOM.render(
<BrowserRouter>
<div>
<HistoryListener>
<NavigationConfirmModal/>
<App />
</HistoryListener>
</div>
</BrowserRouter>
, document.getElementById('root')
);`
        }
    </CodeBlock>
);
