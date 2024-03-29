import 'prismjs/components/prism-css';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-tsx';
import 'prismjs/components/prism-typescript';

import { Divider } from 'antd';
import Prism from 'prismjs';
import * as React from 'react';

export class CodeBlock extends React.Component<{
    divider?: boolean,
}> {
    public componentDidMount() {
        Prism.highlightAll();
    }

    public render() {
        return (
            <>
                { this.props.divider && <Divider dashed={ true }/> }
                <pre>
                    <code className="language-jsx">
                        { this.props.children }
                    </code>
                </pre>
            </>
        );
    }
}
