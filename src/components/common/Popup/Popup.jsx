import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as S from './popup.styled';

const Popup = (props) => {
  return (
    <Modal {...props} size='sm' aria-labelledby='contained-modal-title-vcenter' centered>
      <S.PopupContent>
        <Modal.Header closeButton>
          <Modal.Title id='contained-modal-title-vcenter'>결제 완료</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>결제완료 되었습니다.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={props.onHide}>
            확인
          </Button>
        </Modal.Footer>
      </S.PopupContent>
    </Modal>
  );
};

export default Popup;
