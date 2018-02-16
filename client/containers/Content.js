import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  flex-grow: 1;
  background: orange;
  color: purple;
`;

const Home = () => <h3>Home sdflkasjdf lkjadf lkjadlk jaslkdj lk</h3>;
const Projects = () => <h3>Projects</h3>;
const Contact = () => (<h3>Contact</h3>);


class Content extends Component {
  render() {
    return (
      <Wrapper>
        <Route exact path="/" component={Home} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/contact" component={Contact} />
      </Wrapper>
    );
  }
}

export default Content;
