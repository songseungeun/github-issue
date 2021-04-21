/* eslint-disable no-tabs */
import { useState } from 'react';
import styled from 'styled-components';
import colorList from '../../constants/colorList';
import { postLabels } from '../../service/api';

const NewLabelBlock = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #888;
  padding: 10px;
`;

const LabelPreviewBlock = styled.div`
  padding: 10px 0;
`;

const Label = styled.strong`
  padding: 5px 7px;
  background-color: ${props => props.bgColor || ''};
  color: ${props => props.fontColor || ''};
`;

const NewLabelContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: 15px;
`;

const DescWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const ColorInputWrapper = styled.div``;

const LabelWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

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
      <LabelPreviewBlock>
        <Label
          fontColor={labelInput.color.fontColor}
          bgColor={labelInput.color.bgColor}
        >
          {labelInput.name || 'Label preview'}
        </Label>
      </LabelPreviewBlock>

      <NewLabelContainer>
        <LabelWrapper>
          <label htmlFor="name">Label name</label>
          <input
            type="text"
            name="name"
            placeholder="Label name"
            onChange={changeInputValue}
            value={labelInput.name}
          />
        </LabelWrapper>
        <DescWrapper>
          <label htmlFor="desc">Description</label>
          <input
            type="text"
            name="desc"
            placeholder="Description (optional)"
            onChange={changeInputValue}
            value={labelInput.desc}
          />
        </DescWrapper>
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
