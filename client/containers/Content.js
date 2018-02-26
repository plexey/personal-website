import React, { Component } from "react";
import { Route } from "react-router-dom";
import styled from "styled-components";
import * as routes from "../constants/routes";
import About from "./About";
import Projects from "./Projects";
import Project from "./Project";
import Contact from "./Contact";

const Wrapper = styled.div`
  display: grid;
  grid-row-start: main3;
  grid-row-end: main4;
  grid-template-columns: ${props => props.theme.deskGridTempCol};
  min-height: 100vh;
  transition: 200ms ease all;
  background-color: #f4f4f4;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'%3E%3Cg fill='%23e0e0e0' fill-opacity='0.4'%3E%3Cpath fill-rule='evenodd' d='M0 0h4v4H0V0zm4 4h4v4H4V4z'/%3E%3C/g%3E%3C/svg%3E");

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
        <Route exact path={routes.ABOUT} component={About} />
        <Route exact path={routes.PROJECTS} component={Projects} />
        <Route exact path={routes.PROJECT} component={Project} />
        <Route exact path={routes.CONTACT} component={Contact} />
      </Wrapper>
    );
  }
}

export default Content;
