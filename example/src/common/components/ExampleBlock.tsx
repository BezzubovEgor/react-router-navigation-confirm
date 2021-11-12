import { EyeInvisibleOutlined, EyeOutlined } from '@ant-design/icons';
import { Button, Card, Modal } from 'antd';
import * as React from 'react';

import { CodeBlock } from './CodeBlock';
import { SectionDevider } from './SectionDevider';

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
        isCodeOpen: false,
        isExampleOpen: false,
    };

    public activate = () => this.props.onActivate && this.props.onActivate(this);

    public getCode = () => React.Children.toArray(this.props.children).find((node: any) => node.type === Code);

    public getDescription = () => React.Children.toArray(this.props.children).find((node: any) => node.type === Description);

    public getExampleModal = () => (
        <Modal
            visible={ this.state.isExampleOpen }
            closable={ false }
            destroyOnClose={ true }
            footer={<Button key="back" onClick={ this.toggleExample }>Close</Button>}
        >
            { React.Children.toArray(this.props.children).filter((node: any) => node.type !== Description && node.type !== Code) }
        </Modal>
    );


    public getShowButton = () => <div style={ { textAlign: 'center' } }><Button icon="desktop" size="large" onClick={ this.toggleExample }>Show example</Button></div>;

    public toggleExample = () => this.setState({ isExampleOpen: !this.state.isExampleOpen });

    public toggleSection = () => this.setState({ isCodeOpen: !this.state.isCodeOpen });

    public showIcon = (show: boolean) => {
        if (show) {
            return <span>Hide code <EyeInvisibleOutlined /></span>
        }
        return <span>Show code <EyeOutlined /></span>;
    };

    public renderFooter = () => this.getCode() && (
        <>
            <SectionDevider onClick={ this.toggleSection }>{ this.showIcon(this.state.isCodeOpen) }</SectionDevider>
            <Card.Meta description={ <span className="text-black">{ this.getDescription() }</span> }/>
            { this.state.isCodeOpen && <CodeBlock divider={ true }>{ this.getCode() }</CodeBlock> }
        </>
    );

    public render() {
        return (
            <Card style={ { marginBottom: '16px' } }>
                { this.getShowButton() }
                { this.getExampleModal() }
                { this.renderFooter() }
            </Card>
        );
    }
}
