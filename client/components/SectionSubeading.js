import styled from 'styled-components';

const SectionHeading = styled.h1`
  font-size: 20px;
  font-weight: bold;
  width: 100%;
  color: hsl(0, 0%, 40%);
  margin: 15px 0 0 0;

    @media screen and (max-width: 1000px) {
    ${SectionHeading} {
      font-size: 18px;
    }
  }
`;

export default SectionHeading