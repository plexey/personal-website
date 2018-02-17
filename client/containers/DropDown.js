import React from 'react';
import styled from 'styled-components';
import { Route, NavLink } from 'react-router-dom';

const Wrapper = styled.div`
  height: 100%;
  position: relative;
  display: inline-block;
`

const List = styled.ul`
  display: flex;
  flex-direction: column;
  position: absolute;
  min-width: 250px;
  z-index: 1;
  border-style: solid;
  border-width: 1px 0 0 0;
  border-color: hsl(0, 0%, 25%);
`;

const activeClassName = 'active-link'

const ListItem = styled(NavLink).attrs({
  activeClassName
})`
  display: flex;
  align-items: center;
  color: hsl(0, 0%, 10%);
  font-size: 15px;
  text-decoration: none;
  background: white;
  padding: 15px 15px 15px 15px;
  font-family: ${props => props.theme.font};
  font-weight: bold;
  transition: 200ms ease all; 

  ${ListItem}:hover {
    color: hsl(300, 50%, 50%);
  }
  &.${activeClassName} {
    color: hsl(0, 0%, 90%);
    background: hsl(300, 50%, 50%);
  }
`

const Button = styled.button`
  display: flex;
  align-items: center;
  color: ${props => props.active ? props.theme.brandColor : 'hsl(0, 0%, 10%)'};
  font-size: 17px;
  text-decoration: none;
  background: ${props => props.active ? 'hsl(0, 0%, 20%)' : 'none'};
  height: 100%;
  padding: 0 15px 0 15px;
  font-family: ${props => props.theme.font};
  font-weight: bold;
  transition: 100ms ease all; 
  border: none; 
  outline: none;
`;


class DropDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    }
  }

  toggleVisible = () => {
    const { visible } = this.state;
    this.setState({
      visible: visible ? false : true
    })
  }

  render() {
    const { visible } = this.state;
    const { title, listItems } = this.props;
    const values = Object.values(listItems);
    const keys = Object.keys(listItems)
    return (
      <Wrapper>
        <Button active={visible} onClick={this.toggleVisible}>
          {title}{'\u00A0'}<i className="fas fa-angle-down"></i>
        </Button>
        {visible && <List>
          {values.map((item, index) =>
            <ListItem
              onClick={this.toggleVisible}
              to={`/projects/${keys[index]}`}
              key={index}>
              {item.heading}
            </ListItem>
          )}
        </List>}
      </Wrapper>
    );
  }
}



export default DropDown;