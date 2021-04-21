import { useState } from 'react';
import styled from 'styled-components';
import MenuTab from '../Items/MenuTab';
import NewLabelButton from '../Items/NewLabelButton';
import LabelList from './LabelList';
import NewLabel from './NewLabel';

const LabelEditorBlock = styled.div`
  max-width: 970px;
  margin: 0 auto;
  background-color: #f4f4f4;
`;

const MenuContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 35px 0;
  background-color: #ccc;
`;

const LabelEditor = () => {
  const [newLabel, setNewLabel] = useState(false);

  return (
    <LabelEditorBlock>
      <MenuContainer>
        <MenuTab />
        <NewLabelButton newLabel={newLabel} setNewLabel={setNewLabel} />
      </MenuContainer>

      {newLabel && <NewLabel />}

      <LabelList />
    </LabelEditorBlock>
  );
};

export default LabelEditor;
