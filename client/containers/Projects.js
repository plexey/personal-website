import React, { Component } from "react";
import styled from "styled-components";
import { projects } from "../data";
import ContentWrapper from "../components/ContentWrapper";
import Thumbnail from "./Thumbnail";
import FlipMove from "react-flip-move";

// returns deduped array of tags from each project in 'content'
function getTags(projects) {
  const allTags = projects
    .map(item => item.tags)
    .reduce((prev, curr) => prev.concat(curr));
  return [...new Set(allTags)];
}

function getThumbnails(projects, projectNames, filter) {
  const filtered =
    filter !== "show all"
      ? projects.filter(project => project.tags.includes(filter))
      : projects;
  return filtered.map(item => (
    <Thumbnail
      key={`project-${item.heading}`}
      locationUrl={`projects/${item.name}`}
      heading={item.heading}
      imageSrc={item.images[0].original}
    />
  ));
}

const Thumbnails = styled(FlipMove)`
  display: grid;
  grid-template-columns: [thumb-col-1] 1fr [thumb-col-2] 1fr [thumb-col-3];
  grid-gap: 35px;
  width: 100%;

  @media screen and (max-width: 1300px) {
    ${Thumbnails} {
      grid-gap: 25px;
      grid-template-columns: 100%;
    }
  }
`;

const TagsContainer = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
`;

const Tag = styled.li`
  background: ${props =>
    props.active ? props.theme.textColor : props.theme.brandColor};
  box-shadow: 0 3px 0 0 ${props => props.theme.brandColorDark};
  margin: 0 10px 10px 0;
  padding: 10px 20px 10px 20px;
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
  color: ${props =>
    props.active ? props => props.theme.brandColor : props.theme.textColor};
  transition: 200ms ease all;

  @media screen and (max-width: 1000px) {
    ${Tag} {
      font-size: 12px;
      padding: 8px 15px 8px 15px;
      margin: 0 5px 5px 0;
    }
  }
`;

const FilterMessage = styled.p`
  color: ${props => props.theme.textColor};
  font-size: 18px;
  margin: 20px 0 30px 0;

  @media screen and (max-width: 1300px) {
    ${FilterMessage} {
      font-size: 15px;
      margin: 20px 0 20px 0;
    }
  }
`;

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: "show all"
    };
  }

  changeFilter = val => {
    this.setState({
      filter: val
    });
  };

  render() {
    const { filter } = this.state;
    const projectNames = Object.keys(projects);
    const projectsValues = Object.values(projects);

    const tags = getTags(projectsValues).map(tag => (
      <Tag
        active={filter === tag}
        onClick={() => this.changeFilter(tag)}
        key={`tag-${tag}`}
      >
        {tag}
      </Tag>
    ));

    const thumbnails = getThumbnails(projectsValues, projectNames, filter);

    return (
      <ContentWrapper>
        <TagsContainer>
          <Tag
            active={filter === "show all"}
            onClick={() => this.changeFilter("show all")}
            key={`tag-showall`}
          >
            show all
          </Tag>
          {tags}
        </TagsContainer>
        <FilterMessage>
          Showing {thumbnails.length} projects filtered by '{filter}'
        </FilterMessage>

        <Thumbnails typeName="ul" duration={200} easing="ease-out">
          {thumbnails}
        </Thumbnails>
      </ContentWrapper>
    );
  }
}

export default Projects;
