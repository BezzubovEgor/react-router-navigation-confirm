import * as React from 'react';

import { APITable, InlineCode } from 'src/common/components';

export const NavigationConfirmAPI = () => (
    <APITable dataSource={[
            {
                default: <i>no default</i>,
                desc: <div>
                        function that takes object
                        with <InlineCode>onConfirm</InlineCode> and <InlineCode>onCancel</InlineCode> fields-functions
                        and returns React node to render when user navigate to other page / Route
                    </div>,
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
            }, {
                default: <InlineCode>true</InlineCode>,
                desc: <div>
                        condition to render confirmation, you can hide or
                        show dialog by pass <InlineCode>true</InlineCode> or <InlineCode>false</InlineCode>, or
                        create custom behaviour using functio
                    </div>,
                key: 3,
                prop: 'when',
                type: 'boolean | ((location: Location, routeProps: RouteComponentProps) => boolean)',
            }
        ]}
    />
)