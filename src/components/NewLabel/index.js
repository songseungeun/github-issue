/* eslint-disable no-tabs */
import { useState } from 'react';
import {
  NewLabelBlock,
  LabelPreviewBlock,
  NewLabelContainer,
  DescWrapper,
  ColorInputWrapper,
  LabelWrapper
} from './index.styles';
import colorList from '../../constants/colorList';
import { postLabels } from '../../service/api';

import InputLabel from './InputLabel';
import LabelPreview from './LabelPreview';

const initState = {
  name: '',
  desc: '',
  color: {
    fontColor: '#111',
    bgColor: '#98c9d4'
  }
};

const NewLabel = ({ setNewLabel, setStatus }) => {
  const [labelInput, setLabelInput] = useState(initState);

  const changeInputValue = ({ target: { name, value } }) => {
    setLabelInput({
      ...labelInput,
      [name]: value
    });
  };

  const randomColor = () => {
    const randomNumber = Math.floor(Math.random() * 6);

    setLabelInput({
      ...labelInput,
      color: colorList[randomNumber]
    });
  };

  const addLabel = async () => {
    setStatus(prev => ({
      ...prev,
      loading: true
    }));

    try {
      const res = await postLabels(labelInput);

      setStatus(prev => ({
        ...prev,
        loading: false
      }));

      setLabelInput(initState);
      setNewLabel(false);
    } catch (e) {
      setStatus(prev => ({
        ...prev,
        loading: false,
        error: e
      }));
    }
  };

  return (
    <NewLabelBlock>
      <LabelPreview labelInput={labelInput} />

      <NewLabelContainer>
        <InputLabel
          inputName="name"
          labelName="Label name"
          placeholder="Label name"
          onChange={changeInputValue}
          value={labelInput.name}
        />
        <InputLabel
          inputName="desc"
          labelName="Description"
          placeholder="Description (optional)"
          onChange={changeInputValue}
          value={labelInput.desc}
        />

        <LabelWrapper>
          <label htmlFor="color">Color</label>
          <ColorInputWrapper>
            <button onClick={randomColor}>R</button>
            <input
              type="text"
              name="color"
              placeholder="Color"
              onChange={changeInputValue}
              value={labelInput.color.bgColor}
            />
          </ColorInputWrapper>
        </LabelWrapper>

        <button onClick={() => setNewLabel(false)}>Cancel</button>
        <button onClick={addLabel}>Create label</button>
      </NewLabelContainer>
    </NewLabelBlock>
  );
};

export default NewLabel;
