import * as React from 'react';

import { HistoryListenerContext } from '../components/HistoryListener';
import { HistoryServiceComponentProps, Omit } from '../types';

type ComponentType<P extends HistoryServiceComponentProps> = React.ComponentClass<P> | React.StatelessComponent<P>;
type WithoutHistoryServiceProsComponent<P extends HistoryServiceComponentProps> = React.FunctionComponent<Omit<P, keyof HistoryServiceComponentProps>>


function withHistoryService<P extends HistoryServiceComponentProps>(
  Component: ComponentType<P>
): WithoutHistoryServiceProsComponent<P> {
  return (props: P) => (
    <HistoryListenerContext.Consumer>
        {value => <Component {...props} historyService={value} />}
    </HistoryListenerContext.Consumer>
  );
}


export {
    withHistoryService,
}
