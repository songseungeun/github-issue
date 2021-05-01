import React from 'react';
import {
  NewLabelBlock,
  LabelPreviewBlock,
  NewLabelContainer,
  DescWrapper,
  ColorInputWrapper,
  LabelWrapper
} from './index.styles';
import LabelItem from '../Label/LabelItem';

const LabelPreview = ({ labelInput }) => {
  return (
    <LabelPreviewBlock>
      <LabelItem
        color={labelInput.color}
        name={labelInput.name || 'Label preview'}
      />
    </LabelPreviewBlock>
  );
};

export default LabelPreview;
