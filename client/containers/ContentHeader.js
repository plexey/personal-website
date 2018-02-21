import React from "react";
import styled from "styled-components";
import { Route } from "react-router-dom";
import content from "../content";

const Wrapper = styled.div`
  display: grid;
  grid-row-start: main2;
  grid-row-end: main3;
  /* Define internal grid  columns */
  grid-template-columns: ${props => props.theme.deskGridTempCol};
  background: hsl(0, 0%, 20%);
  font-family: ${props => props.theme.font};

  @media screen and (max-width: 1300px) {
    ${Wrapper} {
      grid-template-columns: ${props => props.theme.tabGridTempCol};
    }
  }

  @media screen and (max-width: 1000px) {
    ${Wrapper} {
      grid-template-columns: ${props => props.theme.phoneGridTempCol};
    }
  }
`;

const NavArrow = styled.div`
  color: white;
  font-size: 30px;
`;

const Content = styled.div`
  display: grid;
  grid-column-start: cline-2;
  grid-column-end: cline-3;
  /* Define internal grid rows */
  grid-template-rows:
    [ch-row-1]
    10px
    [ch-row-2]
    auto
    [ch-row-3]
    auto
    [ch-row-4]
    auto
    [ch-row-5]
    20px
    [ch-row-6];
`;

const Heading = styled.h2`
  grid-row-start: ch-row-2;
  grid-row-end: ch-row-3;
  color: ${props => props.theme.brandColor};
  display: flex;
  align-items: flex-end;
  font-size: 35px;
  font-weight: bold;

  @media screen and (max-width: 1000px) {
    ${Heading} {
      font-size: 19px;
    }
  }
`;

const Subheading = styled.h3`
  grid-row-start: ch-row-3;
  grid-row-end: ch-row-4;
  color: ${props => props.theme.brandColor};
  display: flex;
  align-items: center;
  font-size: 20px;
  color: hsl(0, 0%, 90%);

  @media screen and (max-width: 1000px) {
    ${Subheading} {
      font-size: 16px;
    }
  }
`;

const NavLinks = styled.nav`
  grid-row-start: ch-row-4;
  grid-row-end: ch-row-5;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Link = styled.a`
  padding: 10px 20px 10px 20px;
  margin: 0 10px 0 0;
  border-radius: 2px;
  background: ${props => props.theme.brandColor};
  font-size: 18px;
  color: ${props => props.theme.textColor};
  text-decoration: none;
  font-weight: bold;
  transition: 200ms ease all;

  ${Link}:hover {
    transform: scale(1.05, 1.05);
  }

  @media screen and (max-width: 1000px) {
    ${Link} {
      font-size: 15px;
      padding: 8px 15px 8px 15px;
    }
  }
`;

const ProjectContentHeader = props => {
  const projData = content[props.match.params.project];
  const linkNames = Object.keys(projData.links);
  const linkPaths = Object.values(projData.links);
  return (
    <Content>
      <Heading>{projData.heading}</Heading>
      <Subheading>{projData.subheading}</Subheading>
      <NavLinks>
        {linkNames.map((item, index) => (
          <Link key={index} href={linkPaths[index]}>
            {item}
          </Link>
        ))}
      </NavLinks>
    </Content>
  );
};

const ContentHeader = () => (
  <Wrapper>
    <Route
      exact
      path="/"
      render={() => (
        <Content>
          <Heading>Home</Heading>
          <Subheading>Who am I?</Subheading>
        </Content>
      )}
    />

    <Route
      exact
      path="/projects"
      render={() => (
        <Content>
          <Heading>Projects</Heading>
          <Subheading>Check out my latest web development projects</Subheading>
        </Content>
      )}
    />

    <Route exact path="/projects/:project" component={ProjectContentHeader} />

    <Route
      exact
      path="/Contact"
      render={() => (
        <Content>
          <Heading>Contact</Heading>
          <Subheading>Get in touch :)</Subheading>
        </Content>
      )}
    />
  </Wrapper>
);

export default ContentHeader;
