import React from "react";
import styled from "styled-components";
import Paragraph from "../components/Paragraph";
import ContentWrapper from "../components/ContentWrapper";
import Section from "../components/Section";
import SectionContent from "../components/SectionContent";
import SectionHeading from "../components/SectionHeading";
import ListItem from "../components/ListItem";
import { about } from "../data";

const List = styled.ul``;

const Portrait = styled.img`
  width: 200px;
  border-radius: 50%;
  border-style: solid;
  border-color: hsl(0, 0%, 20%);
  border-width: 4px;
  margin: 20px;
`;

const Heading = styled.h2`
  color: ${props => props.theme.textColor};
  font-size: 25px;
  font-weight: bold;
`;

const Subheading = styled.h3`
  color: hsl(0, 0%, 35%);
  font-size: 20px;
`;

const Home = () => {
  return (
    <ContentWrapper>
      <Heading>Tom Trinca - Web Developer & Designer</Heading>
      <Subheading>Melbourne, Australia</Subheading>
      <Portrait src="https://i.imgur.com/SquGERT.jpg" alt="mugshot" />
      <Section>
        <SectionContent>
          <Paragraph>{about.description}</Paragraph>
        </SectionContent>
      </Section>

      {about.skills.map((skill, index) => (
        <Section key={`${index}-${skill.name}`}>
          <SectionHeading>{skill.name}</SectionHeading>
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

export default Home;
