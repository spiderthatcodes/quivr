import React from 'react';
import { ModalContainer } from './style';

const ReviewModal = ({ setShowModal }) => {
    return (
        <ModalContainer>
            <h1>Blah</h1>
            <h2 onClick={() => setShowModal(false)}>X</h2>
        </ModalContainer>
    );
};

export default ReviewModal;
