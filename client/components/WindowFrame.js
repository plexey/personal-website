import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Wrapper = styled.div`
  background: hsl(0, 0%, 90%);
  box-shadow: 0 0 20px 0 hsla(0, 0%, 0%, 0.3);
  padding: 7px;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Header = styled.div`
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;
  margin: 0 0 8px 0;

  @media screen and (max-width: 1300px) {
    ${Header} {
      height: 30px;
    }
  }
`;

const UrlBar = styled.p`
  background: white;
  flex-grow: 1;
  height: 100%;
  border-radius: 4px;
  font-size: 18px;
  text-indent: 10px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-content: center;
  align-items: center;

  @media screen and (max-width: 1300px) {
    ${UrlBar} {
      font-size: 14px;
    }
  }
`;

const WindowControls = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  justify-content: center;
  align-items: center;
  margin: 0 8px 0 8px;
`;

const WindowButton = styled.div`
  background: ${props => props.btnColor};
  height: 15px;
  width: 15px;
  border-radius: 50%;
  margin: 0 0 0 7px;

  @media screen and (max-width: 1300px) {
    ${WindowButton} {
      height: 10px;
      width: 10px;
      margin: 0 0 0 5px;
    }
  }
`;

const ImageContent = styled.img`
  max-width: ${props => props.desktop === true ? '100%' : '100%'};
  max-height: ${props => props.desktop === false ? '200px' : 'auto'};
`;

const WindowFrame = ({ projectUrl, desktop, image }) => {
  return (
    <Wrapper>
      <Header>
        <UrlBar>{projectUrl}</UrlBar>
        {desktop === true && (
          <WindowControls>
            <WindowButton btnColor={"#65B4EC"} />
            <WindowButton btnColor={"#EEE372"} />
            <WindowButton btnColor={"#FF5C5C"} />
          </WindowControls>
        )}
      </Header>
      <ImageContent desktop={desktop} src={image} />
    </Wrapper>
  );
};

WindowFrame.propTypes = {
  projectUrl: PropTypes.string.isRequired,
  desktop: PropTypes.bool.isRequired,
  image: PropTypes.string.isRequired
};

export default WindowFrame;
