import styled from 'styled-components';

const Button = styled.button`
  cursor: pointer;
`;

const NewLabelButton = ({ newLabel, setNewLabel }) => {
  const openNewLabel = () => setNewLabel(!newLabel);

  return <Button onClick={openNewLabel}>New label</Button>;
};

export default NewLabelButton;
