import React from "react";
import styled from "styled-components";
import ImageGallery from "react-image-gallery";
import ContentWrapper from '../components/ContentWrapper';
import Section from "../components/Section";
import SectionContent from "../components/SectionContent";
import Paragraph from "../components/Paragraph";
import SectionHeading from "../components/SectionHeading";
import SectionSubeading from "../components/SectionSubeading";
import ListItem from "../components/ListItem";
import content from "../content";
import "react-image-gallery/styles/css/image-gallery.css";

const GalleryWrapper = styled.div`
  box-shadow: 0 0 20px 0 hsla(0, 0%, 0%, 0.1);
`;

const List = styled.ul`
`;

const Link = styled.a`
  font-weight: bold;
  text-decoration: none;
  color: ${props => props.theme.textColor};
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
      <ContentWrapper>
        {/* Images */}

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
              <List>
                {projData.features.map((item, index) => (
                  <ListItem key={item + "- " + index}>{item}</ListItem>
                ))}
              </List>
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
              <List>
                {projData.technologies.map((item, index) => (
                  <ListItem key={item.name + "-" + index}>
                    <Link href={item.link}>{item.name}</Link> -{" "}
                    {item.description}
                  </ListItem>
                ))}
              </List>
            </SectionContent>
          </Section>
        )}

        {/* Resources */}

        {projData.resources !== undefined && (
          <Section>
            <SectionHeading>Resources</SectionHeading>
            <SectionContent>
              <List>
                {projData.resources.map((item, index) => (
                  <ListItem key={item.name + "-" + index}>
                    {item.name}
                    <Link href={item.link}>{item.alias}</Link>
                  </ListItem>
                ))}
              </List>
            </SectionContent>
          </Section>
        )}
      </ContentWrapper>
    );
  }
}

export default Projects;
