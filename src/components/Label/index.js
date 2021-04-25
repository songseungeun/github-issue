import React, { useState } from 'react';
import { LabelWrapper, LabelBlock, Desc, Edit, Delete } from './index.styles';
import LabelItem from './LabelItem';
import EditLabel from '../EditLabel';

const Label = ({ Item: { id, name, color, desc }, status, setStatus }) => {
  const [isEdit, setIsEdit] = useState(false);

  return (
    <LabelWrapper key={`label${id}`}>
      {!isEdit ? (
        <>
          <LabelBlock>
            <LabelItem name={name} color={color} />
          </LabelBlock>
          <Desc>{desc}</Desc>
          <Edit onClick={() => setIsEdit(!isEdit)}>Edit</Edit>
          <Delete>Delete</Delete>
        </>
      ) : (
        <>
          <EditLabel
            {...{ id, name, color, desc, setIsEdit, status, setStatus }}
          />
        </>
      )}
    </LabelWrapper>
  );
};

export default Label;
