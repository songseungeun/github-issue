import React from 'react';
import { Wrapper, Circle, Dimmed } from './index.styles';

const Loading = () => {
  return (
    <>
      <Wrapper>
        <Circle />
        <Circle />
        <Circle />
      </Wrapper>
      <Dimmed />
    </>
  );
};

export default Loading;
