import React from 'react';
import styled from 'styled-components';

const Heading = styled.h1`
  color: hsl(0, 0%, 85%);
  font-size: 25px;
  font-weight: bold;
  padding: 0 20px 0 20px;
  font-family: ${props => props.theme.font}
`;

export default Heading