import * as React from 'react';

import { Divider } from 'antd';

import './SectionDevider.css';


export const SectionDevider = ({
    onClick = () => {/* */},
    children,
}: {
    onClick: () => void,
    children: React.ReactNode,
}) => (
    <Divider orientation="right" style={{
        fontSize: '12px', fontWeight: 'bold',
    }}>
        <span className="section-devider" onClick={ onClick }>{ children }</span>
    </Divider>
);