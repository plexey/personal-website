import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const activeClassName = 'active-link'

const Link = styled(NavLink).attrs({
  activeClassName
}) `
  display: flex;
  align-items: center;
  color: hsl(220, 63%, 75%);
  font-size: 17px;
  text-decoration: none;
  background: hsl(220, 16%, 22%);
  height: 100%;
  padding: 0 15px 0 15px;
  font-family: ${props => props.theme.font};
  font-weight: bold;
  transition: 200ms ease all; 

  &.${activeClassName} {
    color: hsl(220, 16%, 22%);
    background: hsl(205, 100%, 65%);
  }
`

// Link.defaultProps = {
//   theme: {
//     main: 'blue'
//   }
// }

export default Link;