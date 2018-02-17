import React from 'react';
import styled from 'styled-components';
import Heading from '../components/Heading';
import NavLink from '../components/NavLink';
import DropDown from './DropDown';
import content from '../content';
import { Route } from 'react-router'

const HeaderContainer = styled.header`
  display: grid;
  grid-row-start: main1;
  grid-row-end: main2;
  /* Define internal grid columns */
  grid-template-columns: [head1] 50px [head2] auto [head3] 50px [head4];
  background: ${props => props.theme.brandColor};
`;

const HeaderContent = styled.div`
  grid-column-start: head2;
  grid-column-end: head3;
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
`

export default class Header extends React.Component {
  render() {
    return (
      <HeaderContainer>
        <HeaderContent>
          <Heading>Tom Trinca</Heading>
          <NavLinks>
            <NavLink exact to="/">Home</NavLink>

            {/* <NavLink to="/projects">Projects</NavLink> */}
            {/* <Route exact path="/projects/:project" component={Item} /> */}
            {/* <DropDown title={"Projects"} listItems={content} /> */}

            <DropDown title={"Projects"} listItems={content} />

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
