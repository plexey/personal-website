import styled from "styled-components";
import { NavLink } from "react-router-dom";

const activeClassName = "active-link";

const StyledNavLink = styled(NavLink).attrs({
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

  ${StyledNavLink}:hover {
    color: ${props => props.theme.brandColor};
    background: hsl(0, 0%, 20%);
  }

  @media screen and (max-width: 1300px) {
    ${StyledNavLink} {
      font-size: 14px;
      padding: 0 8px 0 8px;
    }
  }
`;

export default StyledNavLink;
