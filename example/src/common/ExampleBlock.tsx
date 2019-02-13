import * as React from 'react';

import { Button, Card, Icon } from 'antd';

import { CodeBlock } from './CodeBlock';
import { SectionDivider } from './SectionDevider';

interface IProps {
    children: React.ReactNode,
    onActivate?: (component: any) => void;
    activated?: any,
}

const Code = ({ children }: any) => children;
const Description = ({ children }: any) => children;


export class ExampleBlock extends React.Component<IProps> {
    public static Code = Code;
    public static Description = Description;

    public state = {
        isOpen: false,
    };

    public activate = () => this.props.onActivate && this.props.onActivate(this);

    public getCode = () => React.Children.toArray(this.props.children).find((node: any) => node.type === Code);

    public getDescription = () => React.Children.toArray(this.props.children).find((node: any) => node.type === Description);

    public getBody = () => React.Children.toArray(this.props.children).filter((node: any) => node.type !== Description && node.type !== Code);

    public getNotActivatedBody = () => <div style={ { textAlign: 'center' } }><Button type="primary" shape="round" icon="desktop" size="large" onClick={ this.activate }>Show example</Button></div>;

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
    );

    public render() {
        const { onActivate, activated } = this.props;
        return (
            <Card style={ { marginBottom: '16px' } }>
                { !onActivate || activated === this ? this.getBody() : this.getNotActivatedBody() }
                { this.renderFooter() }
            </Card>
        );
    }
}

