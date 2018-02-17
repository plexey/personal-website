import React, { Component } from 'react';
import styled from 'styled-components';
import content from '../content';

const Wrapper = styled.div`
  grid-column-start: content2;
  grid-column-end: content3;
  font-family: ${props => props.theme.font};
  `

const Content = styled.div`

`

const Heading = styled.h1`
  font-size: 25px;
  padding: 20px 0 5px 0;
  font-weight: bold;
  width: 100%;
  border-style: solid;
  border-width: 0 0 1px 0;
  border-color: hsla(0, 0%, 0%, .15);
  color: hsl(0, 0%, 15%);
`

const Paragraph = styled.p`
  padding: 20px 0 0 0;
`

const Features = styled.ul`

`

const Feature = styled.li`

`

class Projects extends React.Component {
  render() {
    const { match } = this.props;
    const projData = content[match.params.project];
    return (
      <Wrapper>
        <Heading>Description</Heading>
        <Paragraph>
          {projData.description}
        </Paragraph>
        <Heading>Uses</Heading>
        <Features>
          {projData.features.map((item, index) => {
            <Feature key={index}>{item}</Feature>
          })}
        </Features>
      </Wrapper>
    );
  }
}


export default Projects;
