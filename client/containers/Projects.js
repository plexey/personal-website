import React, { Component } from 'react';
import styled from 'styled-components';
import content from '../content';
import Section from '../components/Section';
import Paragraph from '../components/Paragraph';

const Wrapper = styled.div`
  grid-column-start: cline-2;
  grid-column-end: cline-3;
  font-family: ${props => props.theme.font};
  padding: 0 0 60px 0;
`;

const Heading = styled.h1`
  font-size: 27px;
  padding: 0 0 10px 0;
  margin: 0 0 15px 0;
  font-weight: bold;
  width: 100%;
  border-style: solid;
  border-width: 0 0 1px 0;
  border-color: hsla(0, 0%, 0%, .15);
  color: hsl(0, 0%, 15%);
`;

const ListItems = styled.ul`
  font-size: 19px;
`;

const ListItem = styled.li`
  padding: 5px 0 5px 0;
`;

const Link = styled.a`
  font-weight: bold;
  text-decoration: none;
  color: hsl(220, 50%, 50%);
`

const Image = styled.img`
  margin: 50px 0 20px 0;
  width: 70%;
  min-width: 800px;
  max-width: 1000px;
  /* box-shadow: 0 0 20px 0 hsla(0, 0%, 0%, .4); */

  @media screen and (max-width: 1000px) {
    ${Image} {
        min-width: 100%;
        width: 100%;
    }
}
`;

class Projects extends React.Component {
  render() {
    const { match } = this.props;
    const projData = content[match.params.project];
    return (
      <Wrapper>

        {/* Image */}

        {projData.image !== undefined &&
          <Image src={projData.image} alt={projData.heading} />
        }

        <Section>
        <Heading>Description</Heading>
        <Paragraph>
          {projData.description}
        </Paragraph>
        </Section>

        {/* Features */}

        {projData.features !== undefined &&
          <Section>
            <Heading>Features</Heading>
            <ListItems>
              {projData.features.map((item, index) =>
                <ListItem key={item + "-" + index}>
                  {item}
                </ListItem>
              )}
            </ListItems>
          </Section>
        }

        {/* Technologies */}

        {projData.technologies !== undefined &&
          <Section>
            <Heading>Technologies</Heading>
            <ListItems>
              {projData.technologies.map((item, index) =>
                <ListItem key={item.name + "-" + index}>
                  <Link href={item.link}>{item.name}</Link> - {item.description}
                </ListItem>
              )}
            </ListItems>
          </Section>
        }

      </Wrapper>
    );
  }
}


export default Projects;
