import React from "react";
import styled from "styled-components";
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
  flex-direction: column;
  max-width: 100%;
  display: flex;
  box-shadow: 5px 5px 10px 0 hsla(0, 0%, 00%, 0.2);
`;

const Link = styled(NavLink)`
  text-decoration: none;
  color: ${props => props.theme.textColor};
`;

const Heading = styled.h2`
  color: ${props => props.theme.textColor};
  text-align: center;
  font-size: 16px;
  font-weight: bold;
  padding: 8px 0 8px 0;
  background: white;
  background: linear-gradient(hsl(0, 0%, 100%), hsl(0, 0%, 95%));
  text-decoration: none;
  border-width: 0 0 1px 0;
  border-style: solid;
  border-color: hsla(0, 0%, 0%, 0.2);

  @media screen and (max-width: 1300px) {
    ${Heading} {
      font-size: 14px;
      padding: 5px 0 5px 0;
    }
  }
`;

const Image = styled.img`
  max-width: 100%;
`;

class Thumnail extends React.Component {
  render() {
    const { locationUrl, heading, imageSrc } = this.props;

    // Use Imgur API to send thumnail version
    // of image via a thumnail suffix appended
    // to end of the image id

    // Define imgur thumnail suffix
    const imgurThumnailSuffix = "h";
    // position to append the thumnail suffix
    const insertionPosition = imageSrc.length - 4;
    // insert the suffix into 'imageSrc'
    const thumnailSrc = insertString(
      imageSrc,
      imgurThumnailSuffix,
      insertionPosition
    );

    return (
      <Wrapper>
        <Link to={locationUrl}>
          <Heading>{heading}</Heading>
          <Image src={thumnailSrc} alt={heading} />
        </Link>
      </Wrapper>
    );
  }
}

export default Thumnail;
