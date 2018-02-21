import styled from "styled-components";
import { NavLink } from "react-router-dom";

const activeClassName = "active-link";

const Link = styled(NavLink).attrs({
  activeClassName
})`
  display: flex;
  align-items: center;
  color: ${props => props.theme.textColor};
  font-size: 17px;
  text-decoration: none;
  background: none;
  height: 100%;
  padding: 0 15px 0 15px;
  font-family: ${props => props.theme.font};
  font-weight: bold;
  transition: 200ms ease all; 

  &.${activeClassName} {
    color: ${props => props.theme.brandColor};
    background: hsl(0, 0%, 20%);
  }

  ${Link}:hover {
    color: ${props => props.theme.brandColor};
    background: hsl(0, 0%, 20%);
  }

  @media screen and (max-width: 1300px) {
    ${Link} {
      font-size: 14px;
  }
`;

export default Link;
