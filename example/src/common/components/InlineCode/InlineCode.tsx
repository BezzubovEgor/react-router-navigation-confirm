import * as React from 'react';

import './InlineCode.css';


export const InlineCode = ({ children }: { children?: React.ReactNode }) => (
    <code className="inline">{ children }</code>
);