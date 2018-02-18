import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  display: grid;
  grid-row-start: main4;
  grid-row-end: main5;
  /* Define internal grid columns */
  grid-template-columns: ${props => props.theme.deskGridTempCol};
  background: hsl(0, 0%, 80%);
  font-family: ${props => props.theme.font};

  @media screen and (max-width: 1000px) {
    ${FooterContainer} {
      grid-template-columns: ${props => props.theme.phoneGridTempCol};
    }
  }
`;

const FooterContent = styled.div`
  grid-column-start: cline-2;
  grid-column-end: cline-3;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Heading = styled.h1`
  color: hsl(0, 0%, 50%);
  font-weight: bold;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <Heading>Copyright &copy; 2018 Thomas Trinca - Melbourne based Web Developer</Heading>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
