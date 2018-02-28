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
  justify-content: flex-start;
  align-content: center;

  @media screen and (max-width: 1000px) {
    ${PortraitWrapper} {
      justify-content: center;
    }
  }
`;

const Portrait = styled.img`
  height: 220px;
  width: 220px;
  border-radius: 3px;
  border-style: solid;
  border-color: hsl(0, 0%, 20%);
  border-width: 3px;
  margin: 20px 0 0 0;

  @media screen and (max-width: 1000px) {
    ${Portrait} {
    }
  }
`;

const ListItemDescription = styled.em`
  color: hsl(0, 0%, 40%);
  line-height: 25px;
`;

const About = () => {
  return (
    <ContentWrapper>
      <SectionHeading>Web Developer & Designer</SectionHeading>
      <SectionSubheading>Melbourne, Australia</SectionSubheading>

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
              {skill.items.map(
                item =>
                  typeof item === "string" ? (
                    <ListItem key={`${item}-${index}`}>{item}</ListItem>
                  ) : (
                    <ListItem key={`${item.name}-${index}`}>
                      {item.name} -{" "}
                      <ListItemDescription>{item.info}</ListItemDescription>
                    </ListItem>
                  )
              )}
            </List>
          </SectionContent>
        </Section>
      ))}
    </ContentWrapper>
  );
};

export default About;
