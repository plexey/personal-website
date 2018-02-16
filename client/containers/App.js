import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Header from './Header';
import NavLink from '../components/NavLink';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header>
          <NavLink>Home</NavLink>
          <NavLink>Portfolio</NavLink>
          <NavLink>About</NavLink>
        </Header>
      </div>
    );
  }
}