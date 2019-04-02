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
                default: <code className="inline">true</code>,
                desc: <div>
                        condition to render confirmation, you can hide or show dialog by
                        pass <code className="inline">true</code> or <code className="inline">false</code>, or create custom behaviour using function
                    </div>,
                key: 2,
                prop: 'when',
                type: 'boolean | ((location: Location, routeProps: RouteComponentProps) => boolean)',
            }, {
                default: <code className="inline">undefined</code>,
                desc: 'function to call when user click on cancel button',
                key: 3,
                prop: 'onCancel',
                type: '() => void',
            }, {
                default: <code className="inline">undefined</code>,
                desc: 'function to call when user click on confirm button',
                key: 4,
                prop: 'onConfirm',
                type: '() => void',
            }, {
                default: 'Confirm',
                desc: 'Text for confirm button',
                key: 5,
                prop: 'confirmText',
                type: 'string',
            }, {
                default: 'Are you sure you want to leave this page?',
                desc: 'Text for cancel button',
                key: 6,
                prop: 'cancelText',
                type: 'string',
            }, {
                default: 'nc-modal',
                desc: 'modal class name',
                key: 7,
                prop: 'modalClassName',
                type: 'string',
            }, {
                default: 'nc-modal__backdrop',
                desc: 'class name for modal backdrop',
                key: 8,
                prop: 'backdropClassName',
                type: 'string',
            }, {
                default: 'nc-modal__content',
                desc: 'modal content container class name',
                key: 9,
                prop: 'contentClassName',
                type: 'string',
            }, {
                default: 'nc-modal__body',
                desc: 'class name for modal body container',
                key: 10,
                prop: 'bodyClassName',
                type: 'string',
            }, {
                default: 'nc-modal__footer',
                desc: 'class name for modal footer',
                key: 11,
                prop: 'footerClassName',
                type: 'string',
            }, {
                default: 'nc-modal__button',
                desc: 'class name for all modal buttons (applyed for confirm and cancel)',
                key: 12,
                prop: 'buttonClassName',
                type: 'string',
            }, {
                default: 'confirm',
                desc: 'confirm button aditional style',
                key: 13,
                prop: 'buttonConfirmClassName',
                type: 'string',
            }
        ]}
    />
)