import * as React from 'react';

import { Button, Modal, Row } from 'antd';

const ConfirmationModal = ({ onConfirm, onCancel }: any) => (
    <Modal
        visible={ true }
        style={ { top: 20 } }
        closable={ false }
        footer={ null }
        >
        <p><b>Example of confirmation modal</b>. Are you sure you want to leave this page?</p>
        <Row style={ { textAlign: 'right' } }>
            <Button onClick={ onConfirm }>Confirm</Button> {' '}
            <Button onClick={ onCancel }>Cancel</Button>
        </Row>
    </Modal>
);

export {
    ConfirmationModal,
}
