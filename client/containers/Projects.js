import React, { Component } from "react";
import { Route, NavLink } from "react-router-dom";
import styled from "styled-components";
import ContentWrapper from "../components/ContentWrapper";
import content from "../content";
import Thumnail from "./Thumnail";
import FlipMove from "react-flip-move";

// returns deduped array of tags from each project in 'content'
function getTags(projects) {
  const allTags = projects
    .map((item, index) => item.tags)
    .reduce((prev, curr) => prev.concat(curr));
  return [...new Set(allTags)];
}

function getThumnails(projects, projectNames, filter) {
  const filtered =
    filter !== "show all"
      ? projects.filter(project => project.tags.includes(filter))
      : projects;
  return filtered.map((item, index) => (
    <Thumnail
      key={`project-${item.heading}`}
      locationUrl={`projects/${item.name}`}
      heading={item.heading}
      imageSrc={item.images[0].original}
    />
  ));
}

const Thumnails = styled(FlipMove)`
  display: grid;
  grid-template-columns: [thumb-col-1] 50% [thumb-col-2] 50% [thumb-col-3];
  grid-gap: 35px;
  width: 100%;
  margin: 0 0 100px 0;
`;

const TagsContainer = styled.ul`
  display: flex;
  flex-direction: row;
  margin: 40px 0 0 0;
`;

const Tag = styled.li`
  background: ${props =>
    props.active ? props.theme.buttonActive : props.theme.brandColor};
  box-shadow: 0 3px 0 0 ${props => props.theme.brandColorDark};
  margin: 0 10px 0 0;
  padding: 5px 10px 5px 10px;
  font-size: 15px;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
  color: ${props => props.theme.textColor};

  ${Tag}:hover {
    background: ${props => props.theme.buttonActive};
  }
`;

const FilterMessage = styled.p`
  color: ${props => props.theme.textColor};
  font-size: 18px;
  margin: 40px 0 20px 0;
`;

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: "show all"
    };
  }

  changeFilter = val => {
    const { filter } = this.state;
    this.setState({
      filter: val
    });
  };
  render() {
    const { filter } = this.state;
    const projectNames = Object.keys(content);
    const projects = Object.values(content);

    const tags = getTags(projects).map(tag => (
      <Tag
        active={filter === tag}
        onClick={() => this.changeFilter(tag)}
        key={`tag-${tag}`}
      >
        {tag}
      </Tag>
    ));

    const thumnails = getThumnails(projects, projectNames, filter);

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
          Showing {thumnails.length} projects filtered by '{filter}'
        </FilterMessage>

        <Thumnails typeName="ul" duration={200} easing="ease-out">
          {thumnails}
        </Thumnails>

        {/* <Thumnails>{thumnails}</Thumnails> */}
      </ContentWrapper>
    );
  }
}

export default Projects;
