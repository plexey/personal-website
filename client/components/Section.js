import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
  background: hsl(0, 0%, 95%);
  padding: 20px;
  margin: 40px 0 0 0;
  border-radius: 3px;
  box-shadow: 0 0 20px 0 hsla(0, 0%, 0%, 0.1);
  
  @media screen and (max-width: 1000px) {
    ${Section} {
      margin: 20px 0 0 0;
    }
  }
`

export default Section