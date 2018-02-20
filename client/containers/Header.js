import React from 'react';
import styled from 'styled-components';
import Heading from '../components/Heading';
import NavLink from '../components/NavLink';
import DropDown from './DropDown';
import content from '../content';
import { Route } from 'react-router'

const HeaderContainer = styled.header`
  height: 60px;
  width: 100%;
  position: fixed;
  top: 0;
  display: grid;
  /* Define internal grid columns */
  grid-template-columns: ${props => props.theme.deskGridTempCol};
  background: ${props => props.theme.brandColor};
  border-style: solid;
  border-width: 0 0 2px 0;
  border-color: hsl(0, 0%, 20%);
  transition: 200ms ease all;
  z-index: 999;

  @media screen and (max-width: 1300px) {
    ${HeaderContainer} {
      grid-template-columns: ${props => props.theme.tabGridTempCol};
    }
  }

  @media screen and (max-width: 1000px) {
    ${HeaderContainer} {
      grid-template-columns: ${props => props.theme.phoneGridTempCol};
    }
  }
`;

const HeaderContent = styled.div`
  grid-column-start: cline-2;
  grid-column-end: cline-3;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`

const NavLinks = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
`;

const ExternalLinks = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
  flex-grow: 2;
`;

const ExternalLink = styled.a`
  height: 100%;
  padding: 0 15px 0 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 22px;
  text-decoration: none;
  color: hsl(0, 0%, 10%);
  transition: 200ms ease all;

  ${ExternalLink}:hover {
    transform: scale(1.2,1.2);
  }
`

export default class Header extends React.Component {
  render() {
    return (
      <HeaderContainer>
        <HeaderContent>
          <Heading>Tom Trinca</Heading>
          <NavLinks>
            <NavLink exact to="/">Home</NavLink>
            <NavLink exact to="/Projects">Projects</NavLink>
            {/* <DropDown title={"Projects"} listItems={content} /> */}
            <NavLink to="/contact">Contact</NavLink>
          </NavLinks>
          <ExternalLinks>
            <ExternalLink href="https://github.com/plexey">
              <i className="fab fa-github-alt"></i>
            </ExternalLink>
            <ExternalLink href="https://codepen.io/Trinca/pens/popular/">
              <i className="fab fa-codepen"></i>
            </ExternalLink>
            <ExternalLink href="https://github.com/plexey">
              <i className="fab fa-twitter"></i>
            </ExternalLink>
          </ExternalLinks>
        </HeaderContent>
      </HeaderContainer>
    );
  }
}
