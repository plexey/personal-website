import React, { Component } from "react";
import styled from "styled-components";
import ImageGallery from "react-image-gallery";
import content from "../content";
import Section from "../components/Section";
import SectionContent from "../components/SectionContent";
import Paragraph from "../components/Paragraph";
import SectionHeading from "../components/SectionHeading";
import SectionSubeading from "../components/SectionSubeading";
import "react-image-gallery/styles/css/image-gallery.css";

const Wrapper = styled.div`
  grid-column-start: cline-2;
  grid-column-end: cline-3;
  font-family: ${props => props.theme.font};
  padding: 0 0 60px 0;
`;

const GalleryWrapper = styled.div`
  margin: 40px 0 0 0;
  box-shadow: 0 0 20px 0 hsla(0, 0%, 0%, 0.1);
`;

const ListItems = styled.ul`
  font-size: 19px;
`;

const ListItem = styled.li`
  padding: 5px 0 5px 0;
  margin: 0 0 0 20px;
  list-style-type: circle;
`;

const Link = styled.a`
  font-weight: bold;
  text-decoration: none;
  color: hsl(220, 0%, 20%);
  padding: 5px 5px 5px 5px;
  border-radius: 3px;

  ${Link}:hover {
    background: ${props => props.theme.brandColor};
  }
`;

const Image = styled.img`
  margin: 50px 0 20px 0;
  width: 100%;

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

        {projData.images !== undefined && (
          <GalleryWrapper>
            <ImageGallery
              showThumbnails={false}
              showBullets={true}
              items={projData.images}
              showFullscreenButton={false}
              showPlayButton={false}
            />
          </GalleryWrapper>
        )}

        {/* {projData.image !== undefined && (
          <Image src={projData.image} alt={projData.heading} />
        )} */}

        <Section>
          <SectionHeading>About this project</SectionHeading>
          <SectionContent>
            <Paragraph>{projData.description}</Paragraph>
          </SectionContent>
        </Section>

        {/* Features */}

        {projData.features !== undefined && (
          <Section>
            <SectionHeading>Features</SectionHeading>
            <SectionContent>
              <ListItems>
                {projData.features.map((item, index) => (
                  <ListItem key={item + "- " + index}>{item}</ListItem>
                ))}
              </ListItems>
            </SectionContent>
          </Section>
        )}

        {/* Technologies */}

        {projData.technologies !== undefined && (
          <Section>
            <SectionHeading>Technical Sheet</SectionHeading>
            <SectionSubeading>
              Code technologies used while working on this project
            </SectionSubeading>
            <SectionContent>
              <ListItems>
                {projData.technologies.map((item, index) => (
                  <ListItem key={item.name + "-" + index}>
                    <Link href={item.link}>{item.name}</Link> -{" "}
                    {item.description}
                  </ListItem>
                ))}
              </ListItems>
            </SectionContent>
          </Section>
        )}

        {/* Resources */}

        {projData.resources !== undefined && (
          <Section>
            <SectionHeading>Resources</SectionHeading>
            <SectionContent>
              <ListItems>
                {projData.resources.map((item, index) => (
                  <ListItem key={item.name + "-" + index}>
                    {item.name}
                    <Link href={item.link}>{item.alias}</Link>
                  </ListItem>
                ))}
              </ListItems>
            </SectionContent>
          </Section>
        )}
      </Wrapper>
    );
  }
}

export default Projects;
