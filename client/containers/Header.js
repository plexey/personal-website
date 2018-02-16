import React from 'react';
import styled from 'styled-components';
import Heading from '../components/Heading';
import NavLink from '../components/NavLink';

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  align-content: center;
  align-items: center;
  height: 70px;
  background: hsl(220, 16%, 22%);
`;

export default class Header extends React.Component {
  render() {
    return (
      <HeaderContainer>
        <Heading>Heading</Heading>
        <NavLink exact to="/">Home</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </HeaderContainer>
    );
  }
}
