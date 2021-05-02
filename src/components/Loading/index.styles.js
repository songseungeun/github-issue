import styled, { keyframes } from 'styled-components';

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

export const circle = keyframes`
    0%{
        transform: scale(1.3);
    }
    40%{
        transform: scale(1);
    }
    100%{
        transform: scale(1);
    }
`;

export const Wrapper = styled.div`
  width: 150px;
  height: 60px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
`;

export const Circle = styled.div`
  width: 16px;
  height: 16px;
  position: absolute;
  border-radius: 50%;
  background-color: #333;
  left: 15%;
  transform-origin: 50%;
  animation: ${circle} 0.8s alternate infinite ease;

  &:nth-child(2) {
    left: 45%;
    animation-delay: 0.2s;
  }

  &:nth-child(3) {
    left: auto;
    right: 15%;
    animation-delay: 0.3s;
  }
`;
