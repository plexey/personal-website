import React, { Component } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  grid-column-start: cline-2;
  grid-column-end: cline-3;
  font-family: ${props => props.theme.font};
`;

const Content = styled.div`
  padding: 20px;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 70px 0 0 0;
  background: hsl(0, 0%, 95%);
  border-radius: 3px;
  box-shadow: 0 0 20px 0 hsla(0, 0%, 0%, 0.1);
`;

const Portrait = styled.img`
  width: 200px;
  border-radius: 50%;
  border-style: solid;
  border-color: hsl(0, 0%, 20%);
  border-width: 4px;
  margin: 20px;
`;

const Heading = styled.h2`
  color: hsl(0, 0%, 15%);
  font-size: 25px;
  font-weight: bold;
`;

const Subheading = styled.h3`
  color: hsl(0, 0%, 35%);
  font-size: 20px;
`;

const Paragraph = styled.p`
  font-size: 19px;
  margin: 10px 0 0 0;
`;

// const Bio = styled.

const Home = () => {
  return (
    <Wrapper>
      <Content>
        <Heading>Tom Trinca - Web Developer</Heading>
        <Subheading>Melbourne, Australia</Subheading>
        <Portrait src="https://i.imgur.com/SquGERT.jpg" alt="mugshot" />
        <Paragraph>
          I am a Web Developer based in Melbourne, Australia. I have a varied
          background with a Diploma of Website Development, a Bachelor’s degree
          in General Arts & Visual Arts as well as a Masters degree in Arts
          Management (with Distinction). These qualifications have provided me
          with diverse skill set including but not limited to programming,
          design and project management.
        </Paragraph>
        <Paragraph>
          I have worked on a multitude of web projects, designing and building
          responsive and elegant user interfaces and utilities using cutting
          edge technologies. During my Visual Arts degree I acquired a keen eye
          for architecture, and design.
        </Paragraph>
        <Paragraph>
          I am proficient with the following languages: JavaScript, HTML, CSS,
          Java, Python, C#, and SQL. I am also proficient with the following
          frameworks: React, Vue, and ASP.NET. I have extensive experience with
          the following state management tools: Redux and Mobx
        </Paragraph>
      </Content>
    </Wrapper>
  );
};

export default Home;
