import * as React from 'react';

import { APITable } from 'src/common';

export const NavigationConfirmModalAPI = () => (
    <APITable dataSource={[
            {
                default: 'Are you sure you want to leave this page?',
                desc: <div>React element / node to render into the <code className="inline">NavigationConfirmModal</code> component</div>,
                key: 1,
                prop: 'children',
                type: 'React.ReactNode',
            }, {
                default: 'Confirm',
                desc: 'Text for confirm button',
                key: 2,
                prop: 'confirmText',
                type: 'string',
            }, {
                default: 'Are you sure you want to leave this page?',
                desc: 'Text for cancel button',
                key: 3,
                prop: 'cancelText',
                type: 'string',
            }, {
                default: 'nc-modal',
                desc: 'modal class name',
                key: 4,
                prop: 'modalClassName',
                type: 'string',
            }, {
                default: 'nc-modal__backdrop',
                desc: 'class name for modal backdrop',
                key: 5,
                prop: 'backdropClassName',
                type: 'string',
            }, {
                default: 'nc-modal__content',
                desc: 'modal content container class name',
                key: 6,
                prop: 'contentClassName',
                type: 'string',
            }, {
                default: 'nc-modal__body',
                desc: 'class name for modal body container',
                key: 7,
                prop: 'bodyClassName',
                type: 'string',
            }, {
                default: 'nc-modal__footer',
                desc: 'class name for modal footer',
                key: 8,
                prop: 'footerClassName',
                type: 'string',
            }, {
                default: 'nc-modal__button',
                desc: 'class name for all modal buttons (applyed for confirm and cancel)',
                key: 9,
                prop: 'buttonClassName',
                type: 'string',
            }, {
                default: 'confirm',
                desc: 'confirm button aditional style',
                key: 10,
                prop: 'buttonConfirmClassName',
                type: 'string',
            }
        ]}
    />
)