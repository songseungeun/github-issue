import styled from 'styled-components';

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
  strong {
    padding: 5px 7px;
    background-color: #f93241;
  }
`;
const Desc = styled.div`
  flex: 1;
`;
const Edit = styled.button`
  padding: 10px;
`;
const Delete = styled.button`
  padding: 10px;
`;

const LabelList = () => {
  return (
    <LabelListBlock>
      <LabelListHeader>8 labels</LabelListHeader>
      <ul>
        <li>
          <LabelBlock>
            <strong>bug</strong>
          </LabelBlock>
          <Desc>Something Isn't working</Desc>
          <Edit>Edit</Edit>
          <Delete>Delete</Delete>
        </li>
        <li>
          <LabelBlock>
            <strong>bug</strong>
          </LabelBlock>
          <Desc>Something Isn't working</Desc>
          <Edit>Edit</Edit>
          <Delete>Delete</Delete>
        </li>
        <li>
          <LabelBlock>
            <strong>bug</strong>
          </LabelBlock>
          <Desc>Something Isn't working</Desc>
          <Edit>Edit</Edit>
          <Delete>Delete</Delete>
        </li>
        <li>
          <LabelBlock>
            <strong>bug</strong>
          </LabelBlock>
          <Desc>Something Isn't working</Desc>
          <Edit>Edit</Edit>
          <Delete>Delete</Delete>
        </li>
      </ul>
    </LabelListBlock>
  );
};

export default LabelList;
