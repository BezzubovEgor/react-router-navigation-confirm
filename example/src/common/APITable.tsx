import * as React from 'react';

import {Table, Tag} from 'antd';
import { TableProps } from 'antd/lib/table';

export const APITable = (props: TableProps<any>) => (
    <Table
        size="middle"
        pagination={false}
        bordered={true}
        columns={[
            {
                dataIndex: 'prop',
                key: 'prop',
                render: value => <b className="text-blackblue">{value}</b>,
                title: 'Property'
            }, {
                dataIndex: 'desc',
                key: 'desc',
                title: 'Description'
            }, {
                dataIndex: 'type',
                key: 'type',
                render: value => <Tag color="geekblue">{value}</Tag>,
                title: 'Type'
            }, {
                dataIndex: 'default',
                key: 'default',
                title: 'Default'
            }, {
                dataIndex: 'required',
                key: 'required',
                render: value => `${ !!value}`,
                title: 'Required'
            }
        ]}
        { ...props }
    />
);