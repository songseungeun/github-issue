import React from 'react';
import { Button } from '../Label/index.styles';
import { Dimmed, ModalBlock } from './index.styles';

const Modal = ({ confirm, cancel }) => {
  return (
    <>
      <ModalBlock>
        <h3>정말 이 레이블을 삭제하시겠습니까?</h3>

        <div>
          <Button onClick={confirm}>확인</Button>
          <Button onClick={cancel}>취소</Button>
        </div>
      </ModalBlock>
      <Dimmed />
    </>
  );
};

export default Modal;
