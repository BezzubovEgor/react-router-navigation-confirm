import * as React from 'react';

import { HistoryListenerContext } from '../components/HistoryListener';
import { HistoryServiceComponentProps, Omit } from '../types';


function withHistoryService<
    P extends HistoryServiceComponentProps
>(Component: React.ComponentClass<P> | React.StatelessComponent<P>):React.FunctionComponent<Omit<P, keyof HistoryServiceComponentProps>> {
  return (props: P) => (
    <HistoryListenerContext.Consumer>
        {value => <Component {...props} historyService={value} />}
    </HistoryListenerContext.Consumer>
  );
}


export {
    withHistoryService,
}
