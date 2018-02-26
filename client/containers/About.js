import React from "react";
import styled from "styled-components";
import Paragraph from "../components/Paragraph";
import ContentWrapper from "../components/ContentWrapper";
import Section from "../components/Section";
import SectionContent from "../components/SectionContent";
import SectionHeading from "../components/SectionHeading";
import SectionSubheading from "../components/SectionSubeading";
import ListItem from "../components/ListItem";
import { about } from "../data";

const List = styled.ul``;

const PortraitWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
`;

const Portrait = styled.img`
  height: 250px;
  width: 250px;
  border-radius: 3px;
  border-style: solid;
  border-color: hsl(0, 0%, 20%);
  border-width: 3px;
  margin: 20px 0 0 0;
`;

const Heading = styled.h2`
  color: ${props => props.theme.textColor};
  font-size: 25px;
  font-weight: bold;
  width: 100%;
  text-align: center;
`;

const Subheading = styled.h3`
  color: hsl(0, 0%, 35%);
  font-size: 20px;
  width: 100%;
  text-align: center;
`;

const About = () => {
  return (
    <ContentWrapper>
      <Heading>Tom Trinca - Web Developer & Designer</Heading>
      <Subheading>Melbourne, Australia</Subheading>

      <PortraitWrapper>
        <Portrait src={about.image} alt="mugshot" />
      </PortraitWrapper>

      <Section>
        <SectionContent>
          <Paragraph>{about.description}</Paragraph>
        </SectionContent>
      </Section>

      {about.skills.map((skill, index) => (
        <Section key={`${index}-${skill.heading}`}>
          <SectionHeading>{skill.heading}</SectionHeading>
          <SectionSubheading>{skill.subheading}</SectionSubheading>
          <SectionContent>
            <List>
              {skill.items.map(item => <ListItem key={item}>{item}</ListItem>)}
            </List>
          </SectionContent>
        </Section>
      ))}
    </ContentWrapper>
  );
};

export default About;
