import * as React from 'react';

import { APITable } from 'src/common';

export const NavigationConfirmAPI = () => (
    <APITable dataSource={[
            {
                default: <i>no default</i>,
                desc: <div>function that takes object with <code className="inline">onConfirm</code> and <code className="inline">onCancel</code> fields-functions and returns React node to render when user navigate to other page / Route</div>,
                key: 1,
                prop: 'children',
                required: true,
                type: '({ onConfirm: function, onCancel: function }) => React.ReactNode',
            }, {
                default: 'msg',
                desc: `message to show in the confirmation dialog\
                    on page unload event (in new versions in browser message\
                    alwase takes default messges according browser)`,
                key: 2,
                prop: 'unloadMsg',
                type: 'string',
            }
        ]}
    />
)