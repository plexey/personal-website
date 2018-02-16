import React from 'react';
import styled from 'styled-components';

// Define our button, but with the use of props.theme this time
const Header = styled.header`
  display: flex;
  flex-direction: row;
  height: 70px;
  background: hsla(0, 50%, 50%, 1);
`;

export default Header;