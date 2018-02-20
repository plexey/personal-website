import React from "react";
import styled from "styled-components";

const ContentWrapper = styled.div`
  grid-column-start: cline-2;
  grid-column-end: cline-3;
  font-family: ${props => props.theme.font};
`;

export default ContentWrapper;
