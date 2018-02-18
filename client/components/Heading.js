import React from 'react';
import styled from 'styled-components';

const Heading = styled.h1`
  color: hsl(0, 0%, 10%);
  font-size: 29px;
  font-weight: bold;
  padding: 0 30px 0 0;
  font-family: ${props => props.theme.headingFont};
  text-decoration: underline;
  white-space: nowrap;
`;

export default Heading