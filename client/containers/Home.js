import React from "react";
import styled from "styled-components";
import ContentWrapper from "../components/ContentWrapper";
import SectionSubheading from "../components/SectionSubeading";
import SectionHeading from "../components/SectionHeading";
import Section from "../components/Section";
import { projects, about } from "../data";
import imageResize from "../functions/imageResize";
import ImageGallery from "react-image-gallery";
import SectionContent from "../components/SectionContent";
import Paragraph from "../components/Paragraph";
import Button from "../components/Button";
import { NavLink } from "react-router-dom";
import * as routes from "../constants/routes";

const Chevron = styled.i`
  margin: 0 0 0 10px;
`

const WhoAmIWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;

  @media screen and (max-width: 1400px) {
    ${WhoAmIWrapper} {
      flex-direction: column;
    }
  }
`;

const DescriptionWrapper = styled.div`
  margin: 0 0 0 30px;

  @media screen and (max-width: 1400px) {
    ${DescriptionWrapper} {
      margin: 30px 0 0 0;
    }
  }
`;

const Portrait = styled.img`
  height: 250px;
  width: 250px;
  border-radius: 50%;
  border: solid 4px hsl(0, 0%, 20%);

  @media screen and (max-width: 1400px) {
    ${Portrait} {
      height: 200px;
      width: 200px;
      align-self: center;
    }
  }
`;

const GalleryWrapper = styled.div`
  box-shadow: 0 0 20px 0 hsla(0, 0%, 0%, 0.2);
  margin: 0 10px 0 0;
`;

const FeaturedProjectContent = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;

  @media screen and (max-width: 1400px) {
    ${FeaturedProjectContent} {
      flex-direction: column;
    }
  }
`;

const ProjectOverview = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-content: flex-start;
  align-items: flex-start;
  min-width: 30%;
  max-width: 30%;
  margin: 0 0 0 20px;

  @media screen and (max-width: 1400px) {
    ${ProjectOverview} {
      min-width: 100%;
      margin: 20px 0 0 0;
    }
  }
`;

const Home = () => {
  const portraitThumbnail = imageResize(about.image, "m");
  const featured = projects.palettetown;
  const featuredImages = featured.images;
  return (
    <ContentWrapper>
      <Section>
        <WhoAmIWrapper>
          <Portrait src={portraitThumbnail} />
          <DescriptionWrapper>
            <SectionHeading>Web Developer & Designer</SectionHeading>
            <br />
            <Paragraph>{about.short_description}</Paragraph>
            <br />
            <NavLink to={routes.PROJECTS}>
              <Button>
                See my work <Chevron className="fas fa-chevron-right" />
              </Button>
            </NavLink>
          </DescriptionWrapper>
        </WhoAmIWrapper>
      </Section>

      <Section>
        <SectionContent>
          <br />
          <SectionHeading>Featured Project</SectionHeading>
          <br />
          <br />
          <FeaturedProjectContent>
            <GalleryWrapper>
              <ImageGallery
                showThumbnails={false}
                showBullets={true}
                items={featuredImages}
                showFullscreenButton={false}
                showPlayButton={false}
              />
            </GalleryWrapper>
            <ProjectOverview>
              <SectionSubheading>{featured.heading}</SectionSubheading>
              <br />
              <Paragraph>
                Palette Town is a tool for creating and refining unique color
                palettes for your website or other project. With it, you can
                generate triadic, tetradic, square and pentagonal color
                harmonies or alternatively an entirely randomized color palette.
              </Paragraph>
              <br />
              <NavLink to={`${routes.PROJECTS}/${featured.name}`}>
                <Button>
                  View Project <Chevron className="fas fa-chevron-right" />
                </Button>
              </NavLink>
            </ProjectOverview>
          </FeaturedProjectContent>
        </SectionContent>
      </Section>
      <br />
      <Section>
        <SectionContent>
          <SectionHeading>Get in touch</SectionHeading>
          <br />
          <br />
          <Paragraph>
            If you would like to get in touch, please visit the Contact page for
            more information
          </Paragraph>
          <br />
          <NavLink to={routes.CONTACT}>
            <Button>
              Contact Me <Chevron className="fas fa-chevron-right" />
            </Button>
          </NavLink>
        </SectionContent>
      </Section>
    </ContentWrapper>
  );
};

export default Home;
