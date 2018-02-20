import React, { Component } from "react";
import styled from "styled-components";
import { Route, NavLink } from "react-router-dom";

const Wrapper = styled.li`
  flex-direction: column;
  max-width: 100%;
  display: flex;
  box-shadow: 5px 5px 10px 0 hsla(0, 0%, 00%, 0.2);
`;

const Link = styled(NavLink)`
  text-decoration: none;
  color: hsl(0, 0%, 20%);
`;

const Heading = styled.h2`
  text-align: center;
  font-size: 17px;
  font-weight: bold;
  padding: 10px 0 10px 0;
  background: white;
  text-decoration: none;
`;

const Image = styled.img`
  max-width: 100%;
`;

class Thumnail extends React.Component {
  render() {
    const { locationUrl, heading, imageSrc } = this.props;
    return (
      <Wrapper>
        <Link to={locationUrl}>
          <Heading>{heading}</Heading>
          <Image src={imageSrc} alt={heading} />
        </Link>
      </Wrapper>
    );
  }
}

// const Thumnail = ({ locationUrl, heading, imageSrc }) => {
//   return (
//     <Wrapper>
//       <Link to={locationUrl}>
//         <Heading>{heading}</Heading>
//         <Image src={imageSrc} alt={heading} />
//       </Link>
//     </Wrapper>
//   );
// };

export default Thumnail;
