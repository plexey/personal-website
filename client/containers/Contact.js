import React from "react";
import styled from "styled-components";
import ContentWrapper from "../components/ContentWrapper";

const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  color: ${props => props.theme.textColor};
`;

const Heading = styled.h1`
  margin: 50px 0 0 0;
  font-size: 24px;
  color: ${props => props.theme.textColor};
`;

const EmailLink = styled.a`
  margin: 50px 0 50px 0;
  font-size: 22px;
  padding: 20px 30px 20px 30px;
  border: none;
  border-radius: 3px;
  color: ${props => props.theme.textColor};
  background: ${props => props.theme.brandColor};
  font-family: ${props => props.theme.font};
  font-weight: bold;
  box-shadow: 0 3px 0 0 ${props => props.theme.brandColorDark};
  cursor: pointer;
  transition: 200ms ease all;
  text-decoration: none;

  ${EmailLink}:hover {
    background: ${props => props.theme.buttonActive};
  }
`;

const MediaLinks = styled.div`
  display: flex;
`;

const SocialLink = styled.a`
  font-size: 22px;
  padding: 15px 25px 15px 25px;
  border: none;
  border-radius: 4px;
  color: ${props => props.textColor};
  background: ${props => props.primary};
  font-family: ${props => props.theme.font};
  font-weight: bold;
  box-shadow: 0 3px 0 0 ${props => props.secondary};
  cursor: pointer;
  transition: 200ms ease all;
  text-decoration: none;
  text-transform: uppercase;
  display: flex;
  flex-direction: row;
  align-items: center;margin: 0 0 5px 0;
  margin: 0 10px 0 0;

  ${EmailLink}:hover {
    background: ${props => props.theme.buttonActive};
  }
`;

const LinkName = styled.p`
  font-size: 17px;
  font-weight: bold;
  padding: 0 0 0 5px;
`;

const Contact = () => {
  return (
    <ContentWrapper>
      <Content>
        <Heading>
          If you'd like to get in touch regarding a project, to make an enquiry
          or simply to chat, email me at tptrinca@gmail.com or click the button
          bellow. Alternatively, find me via the social media links below.
        </Heading>
        <EmailLink href="mailto:tptrinca@gmail.com">Send me an email</EmailLink>
        <MediaLinks>
          <SocialLink
            textColor={`hsl(0, 0%, 90%)`}
            primary={`#505050`}
            secondary={`#383838`}
            href="LINK"
          >
            <i className="fab fa-github" /> <LinkName>Github</LinkName>
          </SocialLink>
          <SocialLink
            textColor={`hsl(0, 0%, 90%)`}
            primary={`#19AAEA`}
            secondary={`#106C93`}
            href="LINK"
          >
            <i className="fab fa-twitter" /> <LinkName>Twitter</LinkName>
          </SocialLink>
          <SocialLink
            textColor={`hsl(0, 0%, 90%)`}
            primary={`#1475B1`}
            secondary={`#0A405D`}
            href="LINK"
          >
            <i className="fab fa-linkedin-in" /> <LinkName>Linked In</LinkName>
          </SocialLink>
        </MediaLinks>
      </Content>
    </ContentWrapper>
  );
};

export default Contact;
