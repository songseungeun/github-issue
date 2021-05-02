import styled from 'styled-components';

export const Dimmed = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;

  width: 100%;
  height: 100%;

  background-color: rgba(255, 255, 255, 0.5);
`;

export const ModalBlock = styled.div`
  position: absolute;
  top: calc(40% - 65px);
  left: calc(50% - 150px);

  display: flex;
  flex-direction: column;
  align-items: center;

  width: 300px;
  height: 130px;
  padding: 40px 30px;
  border-radius: 3px;
  background-color: #fff;
  z-index: 3;

  h3 {
    margin-bottom: 30px;
  }
`;
