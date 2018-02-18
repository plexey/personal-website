import React, { Component } from "react";
import { Route } from "react-router-dom";
import styled from "styled-components";
import Projects from "./Projects";

const Wrapper = styled.div`
  display: grid;
  grid-row-start: main3;
  grid-row-end: main4;
  grid-template-columns: ${props => props.theme.deskGridTempCol};
  min-height: 100vh;
  background: hsl(0, 0%, 90%);

  @media screen and (max-width: 1000px) {
    ${Wrapper} {
      grid-template-columns: ${props => props.theme.phoneGridTempCol};
    }
  }
`;

const Home = () => <h3>Home sdflkasjdf lkjadf lkjadlk jaslkdj lk</h3>;
const Contact = () => <h3>Contact</h3>;

class Content extends Component {
  render() {
    return (
      <Wrapper>
        <Route exact path="/" component={Home} />
        <Route exact path="/projects/:project" component={Projects} />
        <Route exact path="/contact" component={Contact} />
      </Wrapper>
    );
  }
}

export default Content;
