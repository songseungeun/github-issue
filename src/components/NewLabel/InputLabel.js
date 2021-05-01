import React from 'react';
import {
  NewLabelBlock,
  LabelPreviewBlock,
  NewLabelContainer,
  DescWrapper,
  ColorInputWrapper,
  LabelWrapper
} from './index.styles';

const InputLabel = ({ inputName, labelName, placeholder, onChange, value }) => {
  return (
    <LabelWrapper>
      <label htmlFor={inputName}>{labelName}</label>
      <input
        type="text"
        name={inputName}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </LabelWrapper>
  );
};

export default InputLabel;
