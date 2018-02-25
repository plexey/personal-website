import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  display: grid;
  grid-row-start: main4;
  grid-row-end: main5;
  /* Define internal grid columns */
  grid-template-columns: ${props => props.theme.deskGridTempCol};
  background: hsl(0, 0%, 30%);
  font-family: ${props => props.theme.font};
  box-shadow: inset 0 5px 20px 0 hsla(0, 0%, 0%, .2);

  @media screen and (max-width: 1300px) {
    ${FooterContainer} {
      grid-template-columns: ${props => props.theme.tabGridTempCol};
    }
  }

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
  color: hsl(0, 0%, 60%);
  font-weight: bold;

  @media screen and (max-width: 1000px) {
    ${Heading} {
      text-align: center;
      font-size: 13px;
    }
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <Heading>
          Copyright &copy; 2018 Thomas Trinca
        </Heading>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
