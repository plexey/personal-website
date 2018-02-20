import React from "react";
import styled from "styled-components";

const Button = styled.button`
  color: hsl(0, 0%, 20%);
  background: ${props => props.theme.brandColor};
  padding: 10px 20px 10px 20px;
  font-size: 19px;
  font-family: ${props => props.theme.font};
  border: none;
  border-radius: 3px;
  margin: 0 10px 0 0;
  font-weight: bold;
  box-shadow: 0 4px 0 0 ${props => props.theme.brandColorDark},
    0 7px 6px 0 hsla(0, 0%, 0%, 0.2);
  transition: 200ms ease all;
  cursor: pointer;

  ${Button}:active {
    box-shadow: 0 1px 0 ${props => props.theme.brandColorDark};
    transform: translateY(3px);
  }
`;

export default Button;
