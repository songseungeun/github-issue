import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { getLabels } from '../../service/api';
import Loading from '../Loading';

import LabelList from './LabelList';

const LabelEditor = ({ status, setStatus }) => {
  const [labelList, setLabelList] = useState(null);

  const fetchLabelList = async () => {
    const data = await getLabels();

    setLabelList(data);
  };

  const { loading, error } = status;

  useEffect(() => {
    fetchLabelList();
  }, [loading]);

  if (loading) return <Loading />;
  if (error) return <div>error</div>;
  if (!labelList) return null;

  return (
    <LabelEditorBlock>
      <LabelList {...{ labelList, status, setStatus }} />
    </LabelEditorBlock>
  );
};

export const LabelEditorBlock = styled.div``;

export default LabelEditor;
