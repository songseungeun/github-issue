import styled from 'styled-components';

export const LabelWrapper = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 15px;
  border-bottom: 1px solid #ccc;
`;

export const LabelBlock = styled.div`
  flex: 0.5;
`;

export const Desc = styled.div`
  flex: 1;
`;

export const CenterContainer = styled.button`
  padding: 10px;
  cursor: pointer;
`;

export const Button = styled(CenterContainer)`
  background-color: #333;
  color: #fff;
`;
