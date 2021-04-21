import styled from 'styled-components';

const NewLabelBlock = styled.div`
  background-color: #888;
  padding: 10px;
`;
const LabelPreviewBlock = styled.div`
  strong {
    padding: 5px 7px;
    background-color: #333;
  }
`;
const NewLabelContainer = styled.div`
  display: flex;
`;
const LabelWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const NewLabel = () => {
  return (
    <NewLabelBlock>
      <LabelPreviewBlock>
        <strong>Label preview</strong>
      </LabelPreviewBlock>

      <NewLabelContainer>
        <LabelWrapper>
          <label for="labelname">Label name</label>
          <input type="text" name="labelname" placeholder="Label name" />
        </LabelWrapper>
        <LabelWrapper>
          <label for="description">Description</label>
          <input
            type="text"
            name="description"
            placeholder="Description (optional)"
          />
        </LabelWrapper>
        <LabelWrapper>
          <label for="color">Color</label>
          <input type="text" name="color" placeholder="Color" />
        </LabelWrapper>

        <button>Cancel</button>
        <button>Create label</button>
      </NewLabelContainer>
    </NewLabelBlock>
  );
};

export default NewLabel;
