import styled from 'styled-components';

const Section = styled.div`
  margin: 40px 0 0 0;
  
  @media screen and (max-width: 1000px) {
    ${Section} {
      margin: 20px 0 40px 0;
    }
  }
`

export default Section