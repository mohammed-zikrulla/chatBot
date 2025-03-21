import styled from 'styled-components';

const StyledButton = styled.button`
  background: ${(props) => (props.primary ? "#6200ea" : "#e0e0e0")};
  color: ${(props) => (props.primary ? "white" : "black")};
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  
  &:hover {
    background: ${(props) => (props.primary ? "#3700b3" : "#bdbdbd")};
  }
`;

export default StyledButton;
