import React from "react";
import styled from "styled-components";
import Paragraph from "../components/Paragraph";
import ContentWrapper from "../components/ContentWrapper";

const Email = styled.a`
  color: blue;
  text-decoration: none;
  font-weight: bold;
`;

const LinksContainer = styled.div`
  width: 100%;
  margin: 40px 0 0 0;
  display: flex;

  @media screen and (max-width: 1000px) {
    ${LinksContainer} {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
`;

const Link = styled.a`
  font-size: 20px;
  padding: 10px 20px 10px 20px;
  border: none;
  border-radius: 4px;
  color: ${props => props.textColor};
  background: ${props => props.primary};
  font-family: ${props => props.theme.font};
  font-weight: bold;
  box-shadow: 0 4px 0 0 ${props => props.secondary};
  cursor: pointer;
  transition: 200ms ease all;
  text-decoration: none;
  text-transform: uppercase;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0 0 5px 0;
  margin: 0 10px 0 0;

  ${Link}:hover {
    transform: scale(1.05, 1.05);
  }

  @media screen and (max-width: 1000px) {
    ${Link} {
      justify-content: center;
      font-size: 17px;
      padding: 10px 20px 10px 20px;
      margin: 0 0 10px 0;
      width: 30%;
    }
  }
`;

const LinkName = styled.p`
  font-size: 14px;
  font-weight: bold;
  padding: 0 0 0 10px;

  @media screen and (max-width: 1000px) {
    ${LinkName} {
      font-size: 13px;
    }
  }
`;

const Contact = () => {
  return (
    <ContentWrapper>
      <Paragraph>
        If you would like to contact me regarding a project or to make a general
        enquiry, then please email me at{" "}
        <Email href="mailto:tptrinca@gmail.com">tptrinca@gmail.com</Email>
      </Paragraph>
      <Paragraph>
        Alternatively, you can find me on social media via the links below.
      </Paragraph>
      <LinksContainer>
        <Link
          textColor={`hsl(0, 0%, 90%)`}
          primary={`#505050`}
          secondary={`#383838`}
          href="https://github.com/plexey"
        >
          <i className="fab fa-github" /> <LinkName>Github</LinkName>
        </Link>
        <Link
          textColor={`hsl(0, 0%, 90%)`}
          primary={`#19AAEA`}
          secondary={`#106C93`}
          href="https://twitter.com/tom_trinca"
        >
          <i className="fab fa-twitter" /> <LinkName>Twitter</LinkName>
        </Link>
        <Link
          textColor={`hsl(0, 0%, 90%)`}
          primary={`#1475B1`}
          secondary={`#0A405D`}
          href="https://linkedin.com/in/tom-trinca-3365b815a"
        >
          <i className="fab fa-linkedin-in" /> <LinkName>Linked In</LinkName>
        </Link>
      </LinksContainer>
    </ContentWrapper>
  );
};

export default Contact;
