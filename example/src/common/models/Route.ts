import * as React from 'react';

export interface IRoute {
    component?: React.ComponentClass | React.FunctionComponent | undefined,
    path: string,
    title: string,
}
