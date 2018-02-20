import React, { Component } from 'react';
import styled from 'styled-components';

const SectionHeading = styled.h1`
  font-size: 27px;
  font-weight: bold;
  width: 100%;
  color: ${props => props.theme.textColor};
`;

export default SectionHeading