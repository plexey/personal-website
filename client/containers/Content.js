import React, { Component } from "react";
import { Route } from "react-router-dom";
import styled from "styled-components";
import Home from './Home';
import Projects from "./Projects";
import Project from "./Project";
import Contact from "./Contact";

const Wrapper = styled.div`
  display: grid;
  grid-row-start: main3;
  grid-row-end: main4;
  grid-template-columns: ${props => props.theme.deskGridTempCol};
  min-height: 100vh;
  background: hsl(0, 0%, 90%);
  transition: 200ms ease all;

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

class Content extends Component {
  render() {
    return (
      <Wrapper>
        <Route exact path="/" component={Home} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/projects/:project" component={Project} />
        <Route exact path="/contact" component={Contact} />
      </Wrapper>
    );
  }
}

export default Content;
