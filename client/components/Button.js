import styled from "styled-components";

const Button = styled.button`
  border: none;
  font-family: ${props => props.theme.font};
  background: ${props => props.theme.brandColor};
  box-shadow: 0 3px 0 0 ${props => props.theme.brandColorDark};
  margin: 0 10px 10px 0;
  padding: 10px 20px 10px 20px;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  color: ${props => props.theme.textColor};
  transition: 200ms ease all;

  ${Button}:hover {
    color: ${props => props.theme.brandColor};
    background: ${props => props.theme.textColor};
  }

  @media screen and (max-width: 1000px) {
    ${Button} {
      font-size: 16px;
      padding: 8px 15px 8px 15px;
      margin: 0 5px 5px 0;
    }
  }
`;

export default Button;
