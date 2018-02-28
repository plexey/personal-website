import styled from 'styled-components';

const Heading = styled.h1`
  color: ${props => props.theme.textColor};
  font-size: 29px;
  font-weight: bold;
  padding: 0 30px 0 0;
  font-family: ${props => props.theme.headingFont};
  text-decoration: underline;
  white-space: nowrap;

    @media screen and (max-width: 1300px) {
    ${Heading} {
      font-size: 17px;
      padding: 0 15px 0 0;
    }
  }
`;

export default Heading