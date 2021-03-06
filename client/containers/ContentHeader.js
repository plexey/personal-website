import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Route } from "react-router-dom";
import * as routes from "../constants/routes";
import { projects } from "../data";

const Wrapper = styled.div`
  display: grid;
  grid-column-start: cline-1;
  grid-column-end: cline-4;
  /* Define internal grid  columns */
  grid-template-columns: ${props => props.theme.deskGridTempCol};
  background: hsl(0, 0%, 20%);
  font-family: ${props => props.theme.font};
  max-height: 200px;
  min-height: 200px;

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
  cursor: pointer;

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
  const project = projects[props.match.params.project];
  return (
    <Wrapper>
      <Content>
        <Heading>{project.heading}</Heading>
        <Subheading>{project.subheading}</Subheading>
        <NavLinks>
          {project.links.map(item => (
            <Link key={item.name} href={item.link}>
              {item.name}
            </Link>
          ))}
        </NavLinks>
      </Content>
    </Wrapper>
  );
};

const ContentHeader = () => (
  <React.Fragment>
    {/* <Route
      exact
      path={routes.HOME}
      render={() => (
        <Content>
          <Heading>Home</Heading>
          <Subheading>
            Hello and welcome to my website 
          </Subheading>
        </Content>
      )}
    /> */}

    {/* <Route
      exact
      path={routes.ABOUT}
      render={() => (
        <Wrapper>
          <Content>
            <Heading>About Me</Heading>
            <Subheading>Some information about me</Subheading>
          </Content>
        </Wrapper>
      )}
    /> */}

    <Route
      exact
      path={routes.PROJECTS}
      render={() => (
        <Wrapper>
          <Content>
            <Heading>My Projects</Heading>
            <Subheading>
              Check out my latest web development projects
            </Subheading>
          </Content>
        </Wrapper>
      )}
    />

    <Route exact path={routes.PROJECT} component={ProjectContentHeader} />

    <Route
      exact
      path={routes.CONTACT}
      render={() => (
        <Wrapper>
          <Content>
            <Heading>Contact Me</Heading>
            <Subheading>My contact information</Subheading>
          </Content>
        </Wrapper>
      )}
    />
  </React.Fragment>
);

ProjectContentHeader.propTypes = {
  match: PropTypes.object.isRequired
};

export default ContentHeader;
