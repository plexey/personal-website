import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

function insertString(original, toInsert, pos) {
  if (typeof pos == "undefined") {
    pos = 0;
  }
  if (typeof toInsert == "undefined") {
    toInsert = "";
  }
  return original.slice(0, pos) + toInsert + original.slice(pos);
}

const Wrapper = styled.li`
  display: flex;
  flex-direction: column;
  box-shadow: 5px 5px 15px 0 hsla(0, 0%, 0%, 0.4);
  /* transition: 200ms ease transform; */

  @media screen and (min-width: 1000px) {
    ${Wrapper}:hover {
      /* transform: scale(1.05, 1.05); */
    }
  }
`;

const Link = styled(NavLink)`
  text-decoration: none;
  color: ${props => props.theme.textColor};
  border: none;
  padding: 0;
  margin: 0;
`;

const ImageWrapper = styled.div`
  box-shadow: inset 0 0 40px 10px hsla(0, 0%, 0%, 1);
`;

const Image = styled.img`
  height: auto;
  width: 100%;
  display: block;
  opacity: 0.9;
  border: none;
  padding: 0;
  margin: 0;
`;

const ThumbnailHeader = styled.div`
  background: white;
  width: 100%;
  background: linear-gradient(hsl(0, 0%, 100%), hsl(0, 0%, 95%));
  border-width: 0 0 1px 0;
  border-style: solid;
  border-color: hsla(0, 0%, 0%, 0.2);
  display: grid;
  grid-template-columns: [thumb-header-1] 1fr [thumb-header-2] 2fr [thumb-header-3] 1fr [thumb-header-4];
`;

const Heading = styled.h2`
  color: hsl(0, 0%, 50%);
  font-size: 16px;
  font-weight: bold;
  padding: 5px 0 5px 0;
  text-decoration: none;
  grid-column-start: thumb-header-2;
  grid-column-end: thumb-header-3;
  text-align: center;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;

  @media screen and (max-width: 1300px) {
    ${Heading} {
      font-size: 14px;
      padding: 5px 0 5px 0;
    }
  }
`;

const ThumbnailButtons = styled.div`
  grid-column-start: thumb-header-3;
  grid-column-end: thumb-header-4;
  min-height: 100%;
  min-width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  /* background: green; */
  width: 100px;
`;

const ThumbnailButton = styled.div`
  height: 12px;
  width: 12px;
  border-radius: 50%;
  background: ${props => props.btnColor};
  margin: 0 7px 0 0;
`;

class Thumbnail extends React.Component {
  render() {
    const { locationUrl, heading, imageSrc } = this.props;

    // Use Imgur API to send thumbnail version
    // of image via a thumbnail suffix appended
    // to end of the image id

    // Define imgur thumbnail suffix
    const imgurThumnailSuffix = "h";
    // position to append the thumbnail suffix
    const insertionPosition = imageSrc.length - 4;
    // insert the suffix into 'imageSrc'
    const thumbnailSrc = insertString(
      imageSrc,
      imgurThumnailSuffix,
      insertionPosition
    );

    return (
      <Wrapper>
        <Link to={locationUrl}>
          <ThumbnailHeader>
            <Heading>{heading}</Heading>
            <ThumbnailButtons>
              <ThumbnailButton btnColor={"#65B4EC"} />
              <ThumbnailButton btnColor={"#EEE372"} />
              <ThumbnailButton btnColor={"#FF5C5C"} />
            </ThumbnailButtons>
          </ThumbnailHeader>
          <ImageWrapper>
            <Image src={thumbnailSrc} alt={heading} />
          </ImageWrapper>
        </Link>
      </Wrapper>
    );
  }
}

Thumbnail.propTypes = {
  locationUrl: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired
};

export default Thumbnail;
