import React from 'react';
import styled from 'styled-components';
import { Route, NavLink } from 'react-router-dom';
import content from '../content';


const Wrapper = styled.div`
  display: grid;
  grid-row-start: main2;
  grid-row-end: main3;
  /* Define internal grid  columns */
  grid-template-columns: [ch-col-1] 50px [ch-col-2] auto [ch-col-3] 50px [ch-col-4];
  background: hsl(0, 0%, 20%);
  font-family: ${props => props.theme.font};
`;

const Content = styled.div`
  display: grid;
  grid-column-start: ch-col-2;
  grid-column-end: ch-col-3;
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
`

const Heading = styled.h2`
  grid-row-start: ch-row-2;
  grid-row-end: ch-row-3;
  color: ${props => props.theme.brandColor};
  display: flex;
  align-items: flex-end;
  font-size: 35px;
  font-weight: bold;
`

const Subheading = styled.h3`
  grid-row-start: ch-row-3;
  grid-row-end: ch-row-4;
  color: ${props => props.theme.brandColor};
  display: flex;
  align-items: center;
  font-size: 20px;
  color: hsl(0, 0%, 90%);
`

const NavLinks = styled.nav`
    grid-row-start: ch-row-4;
    grid-row-end: ch-row-5;
    display: flex;
    flex-direction: row;
    align-items: center;
`

const Link = styled.a`
  padding: 0 20px 0 0;
  color: ${props => props.theme.brandColor};
`

const ProjectContentHeader = (props) => {
  const projData = content[props.match.params.project];
  const linkNames = Object.keys(projData.links);
  const linkPaths = Object.values(projData.links);
  return (
    <Content>
      <Heading>{projData.heading}</Heading>
      <Subheading>{projData.subheading}</Subheading>
      <NavLinks>
        {linkNames.map((item, index) =>
          <Link key={index} href={linkPaths[index]}>{item}</Link>
        )}
      </NavLinks>
    </Content>
  )
}

const ContentHeader = () => (
  <Wrapper>

    <Route exact path="/" render={() => (
      <Content>
        <Heading>Home</Heading>
        <Subheading>Home section</Subheading>
      </Content>
    )} />

    <Route exact path="/projects/:project" component={ProjectContentHeader} />

    <Route exact path="/Contact" render={() => (
      <Content>
        <Heading>Contact</Heading>
        <Subheading>Get in touch :)</Subheading>
      </Content>
    )} />

  </Wrapper>
)


export default ContentHeader;