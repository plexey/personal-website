import styled from "styled-components";

const ListItem = styled.li`
  padding: 5px 0 5px 0;
  margin: 0 0 0 20px;
  list-style-type: circle;
  font-size: 20px;

  @media screen and (max-width: 1000px) {
    ${ListItem} {
      font-size: 16px;
    }
  }
`;

export default ListItem;
