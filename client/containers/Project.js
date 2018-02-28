import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import ImageGallery from "react-image-gallery";
import ContentWrapper from "../components/ContentWrapper";
import Section from "../components/Section";
import SectionContent from "../components/SectionContent";
import Paragraph from "../components/Paragraph";
import SectionHeading from "../components/SectionHeading";
import SectionSubeading from "../components/SectionSubeading";
import ListItem from "../components/ListItem";
import { projects } from "../data";
import "react-image-gallery/styles/css/image-gallery.css";

const GalleryWrapper = styled.div`
  box-shadow: 0 0 20px 0 hsla(0, 0%, 0%, 0.2);
`;

const List = styled.ul``;

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

const ListItemDescription = styled.em`
  color: hsl(0, 0%, 40%);
  line-height: 25px;
`;

class Project extends React.Component {
  render() {
    const { match } = this.props;
    const data = projects[match.params.project];

    const formattedDescription = data.description
      .split("\n")
      .map((item, key) => {
        return (
          <span key={key}>
            {item}
            <br />
            <br />
          </span>
        );
      });

    return (
      <ContentWrapper>
        {/* Images */}

        {data.images !== undefined && (
          <GalleryWrapper>
            <ImageGallery
              showThumbnails={false}
              showBullets={true}
              items={data.images}
              showFullscreenButton={false}
              showPlayButton={false}
            />
          </GalleryWrapper>
        )}

        <Section>
          <SectionHeading>About this project</SectionHeading>
          <SectionContent>
            <Paragraph>{formattedDescription}</Paragraph>
          </SectionContent>
        </Section>

        {/* Features */}

        {data.features !== undefined && (
          <Section>
            <SectionHeading>Features</SectionHeading>
            <SectionContent>
              <List>
                {data.features.map((item, index) => (
                  <ListItem key={item + "- " + index}>{item}</ListItem>
                ))}
              </List>
            </SectionContent>
          </Section>
        )}

        {/* Technologies */}

        {data.technologies !== undefined && (
          <Section>
            <SectionHeading>Technical Sheet</SectionHeading>
            <SectionSubeading>
              Code technologies used while working on this project
            </SectionSubeading>
            <SectionContent>
              <List>
                {data.technologies.map((item, index) => (
                  <ListItem key={item.name + "-" + index}>
                    <Link href={item.link}>{item.name}</Link> -{" "}
                    <ListItemDescription>
                      {item.description}
                    </ListItemDescription>
                  </ListItem>
                ))}
              </List>
            </SectionContent>
          </Section>
        )}

        {/* Resources */}

        {data.resources !== undefined && (
          <Section>
            <SectionHeading>Resources</SectionHeading>
            <SectionContent>
              <List>
                {data.resources.map((item, index) => (
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

Project.propTypes = {
  match: PropTypes.object.isRequired
};

export default Project;
