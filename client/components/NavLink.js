import React from 'react';
import styled from 'styled-components';

// Define our button, but with the use of props.theme this time
const NavLink = styled.a`
  font-size: 17px;
  color: red;
  padding: 8px 10px 8px 10px;
  margin: 5px;
  border: 2px solid red;
  border-color: red;
`;

export default NavLink;