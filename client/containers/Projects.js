import React, { Component } from 'react';
import styled from 'styled-components';
import content from '../content';
import Section from '../components/Section';
import Paragraph from '../components/Paragraph';
import SectionHeading from '../components/SectionHeading';

const Wrapper = styled.div`
  grid-column-start: cline-2;
  grid-column-end: cline-3;
  font-family: ${props => props.theme.font};
  padding: 0 0 60px 0;
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
        <SectionHeading>Description</SectionHeading>
        <Paragraph>
          {projData.description}
        </Paragraph>
        </Section>

        {/* Features */}

        {projData.features !== undefined &&
          <Section>
            <SectionHeading>Features</SectionHeading>
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
            <SectionHeading>Technologies</SectionHeading>
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
