import * as React from 'react';

import { Card, Icon } from 'antd';

import { CodeBlock } from './CodeBlock';
import { SectionDivider } from './SectionDevider';

interface IProps {
    children: React.ReactNode,
}

const Code = ({ children }: any) => children;
const Description = ({ children }: any) => children;


export class ExampleBlock extends React.Component<IProps> {
    public static Code = Code;
    public static Description = Description;

    public state = {
        isOpen: false,
    };

    public getCode = () => React.Children.toArray(this.props.children).find((node: any) => node.type === Code);

    public getDescription = () => React.Children.toArray(this.props.children).find((node: any) => node.type === Description);

    public getBody = () => React.Children.toArray(this.props.children).filter((node: any) => node.type !== Description && node.type !== Code);

    public toggleSection = () => this.setState({ isOpen: !this.state.isOpen })

    public showIcon = (show: boolean) => {
        if (show) {
            return <span>Hide code <Icon type="eye-invisible" /></span>
        }
        return <span>Show code <Icon type="eye" /></span>;
    };

    public renderFooter = () => this.getCode() && (
        <>
            <SectionDivider onClick={ this.toggleSection }>{ this.showIcon(this.state.isOpen) }</SectionDivider>
            <Card.Meta description={ <span className="text-black">{ this.getDescription() }</span> }/>
            { this.state.isOpen && <CodeBlock divider={ true }>{ this.getCode() }</CodeBlock> }
        </>
    )

    public render() {
        return (
            <Card>
                { this.getBody() }
                { this.renderFooter() }
            </Card>
        );
    }
}

