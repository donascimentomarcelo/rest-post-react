import React from 'react';
import Modal from 'react-bootstrap-modal';
import './modal.css';

const SearchModal = props => (
    <Modal 
        show={props.show}
        onHide={props.onHide}
        dialogClassName="modal-90w"
        aria-labelledby="modal-styling-title">
        <Modal.Header closeButton>
            <Modal.Title id="modal-styling-title">
                {props.title}
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <p>
                {props.children}
            </p>
        </Modal.Body>
    </Modal>
)

export default SearchModal;
