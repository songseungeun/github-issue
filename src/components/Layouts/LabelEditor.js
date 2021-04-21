import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { getLabels } from '../../service/api';

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
  const [status, setStatus] = useState({
    loading: false,
    error: null
  });

  const [labelList, setLabelList] = useState([]);
  const [newLabel, setNewLabel] = useState(false);

  const fetchLabelList = async () => {
    const data = await getLabels();

    setLabelList(data);
  };

  const { loading, error } = status;

  useEffect(() => {
    fetchLabelList();
  }, [loading]);

  if (loading) return <div>loading...</div>;
  if (error) return <div>error</div>;
  if (!labelList) return null;

  return (
    <LabelEditorBlock>
      <MenuContainer>
        <MenuTab />
        <NewLabelButton newLabel={newLabel} setNewLabel={setNewLabel} />
      </MenuContainer>

      {newLabel && <NewLabel setNewLabel={setNewLabel} setStatus={setStatus} />}

      <LabelList labelList={labelList} />
    </LabelEditorBlock>
  );
};

export default LabelEditor;
