import { useEffect, useState } from 'react';
import styled from 'styled-components';
import getLabels from '../../service/api';

const LabelListBlock = styled.div`
  border: 1px solid #ccc;

  ul {
  }

  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 15px;
    border-bottom: 1px solid #ccc;
  }
`;

const LabelListHeader = styled.div`
  padding: 20px 15px;
  border-bottom: 1px solid #ccc;
`;

const LabelBlock = styled.div`
  flex: 0.5;
`;

const Label = styled.strong`
  padding: 5px 7px;
  background-color: ${props => props.color || ''};
`;

const Desc = styled.div`
  flex: 1;
`;
const Edit = styled.button`
  padding: 10px;
  cursor: pointer;
`;
const Delete = styled.button`
  padding: 10px;
  cursor: pointer;
`;

const LabelList = () => {
  const [labelList, setLabelList] = useState([]);

  const fetchLabelList = async () => {
    const data = await getLabels();

    setLabelList(data);
  };

  useEffect(() => {
    fetchLabelList();
  }, []);

  if (!labelList) return null;

  return (
    <LabelListBlock>
      <LabelListHeader>8 labels</LabelListHeader>
      <ul>
        {labelList.map(({ id, name, desc, color }) => (
          <li key={`label${id}`}>
            <LabelBlock>
              <Label color={color}>{name}</Label>
            </LabelBlock>
            <Desc>{desc}</Desc>
            <Edit>Edit</Edit>
            <Delete>Delete</Delete>
          </li>
        ))}
      </ul>
    </LabelListBlock>
  );
};

export default LabelList;
