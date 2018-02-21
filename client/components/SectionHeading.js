import styled from 'styled-components';

const SectionHeading = styled.h1`
  font-size: 27px;
  font-weight: bold;
  width: 100%;
  color: ${props => props.theme.textColor};

    @media screen and (max-width: 1000px) {
    ${SectionHeading} {
      font-size: 19px;
    }
  }
`;

export default SectionHeading