import * as React from 'react';

import { InlineCode } from 'src/common/components';
import { BasicExampleCode } from './BasicExampleCode';
import { CustomDialogCode } from './CustomDialogCode';


export const GeneralUsage = () => (
    <>
        <h2>General Usage</h2>

        <h3>Basic example</h3>
        <p>
            To show confirmation dialog on every navigation you only need to include <InlineCode>{ '<HistoryListener/>' }</InlineCode> provider-component
            to the root router of your app and <InlineCode>{ '<NavigationConfirmModal/>' }</InlineCode>
            to any Route (inside <InlineCode>{ '<HistoryListener>' }</InlineCode>) in which you want to display confirmation dialog:
        </p>
        <BasicExampleCode />

        <h3>Custom dialog</h3>
        <p>
            If you want to create custom dialog you can use <InlineCode>NavigationConfirm</InlineCode> confirm component:
        </p>
        <CustomDialogCode />
    </>
)