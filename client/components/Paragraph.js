import styled from "styled-components";

const Paragraph = styled.p`
  font-size: 20px;
  margin: 0 0 10px 0;

  @media screen and (max-width: 1000px) {
    ${Paragraph} {
      font-size: 16px;
    }
  }
`;

export default Paragraph;
