import styled from "styled-components";

const ContentWrapper = styled.div`
  grid-column-start: cline-2;
  grid-column-end: cline-3;
  font-family: ${props => props.theme.font};
  margin: 30px 0 30px 0;
  min-height: 100vh;
  
  @media screen and (max-width: 1000px) {
    ${ContentWrapper} {
      margin: 15px 0 15px 0;
    }
  }
`;

export default ContentWrapper;
