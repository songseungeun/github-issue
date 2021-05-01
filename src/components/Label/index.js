import React, { useState } from 'react';
import { LabelWrapper, LabelBlock, Button, Desc } from './index.styles';
import { deleteLabels } from '../../service/api';
import LabelItem from './LabelItem';
import EditLabel from '../EditLabel';

const Label = ({ Item: { id, name, color, desc }, status, setStatus }) => {
  const [isEdit, setIsEdit] = useState(false);

  const deleteLabel = async () => {
    setStatus(prev => ({
      ...prev,
      loading: true
    }));

    try {
      const res = await deleteLabels(id);

      setStatus(prev => ({
        ...prev,
        loading: false
      }));
    } catch (e) {
      setStatus(prev => ({
        ...prev,
        loading: false,
        error: e
      }));
    }
  };

  return (
    <LabelWrapper key={`label${id}`}>
      {!isEdit ? (
        <>
          <LabelBlock>
            <LabelItem name={name} color={color} />
          </LabelBlock>

          <Desc>{desc}</Desc>

          <Button onClick={() => setIsEdit(!isEdit)}>Edit</Button>
          <Button onClick={deleteLabel}>Delete</Button>
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
