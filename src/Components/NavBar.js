import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// Define styled components
const Nav = styled.nav`
  background-color: #333;
  padding: 10px;
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
`;

const NavItem = styled.li`
  margin-right: 15px;
`;

const NavLinkStyled = styled(Link)`
  text-decoration: none;
  color: #fff;
  font-weight: bold;

  &:hover {
    color: #ffcc00;
  }
`;

const NavBar = () => {
  return (
    <Nav>
      <NavList>
        <NavItem>
          <NavLinkStyled to="/">Home</NavLinkStyled>
        </NavItem>
        <NavItem>
          <NavLinkStyled to="/HomeState">States</NavLinkStyled>
        </NavItem>
        <NavItem>
          <NavLinkStyled to="/HomeReducer">Reducers</NavLinkStyled>
        </NavItem>
      </NavList>
    </Nav>
  );
};

export default NavBar;
