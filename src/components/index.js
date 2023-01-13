//This file defines and exports the Navbar component, which renders the navigation bar of the website, including links to the Home, About, and Contact Us pages. It imports and uses elements from the NavbarElements file to create the navigation bar's appearance and functionality.

import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";
const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to="/" activeStyle>
            Home
          </NavLink>
          <NavLink to="/About" activeStyle>
            About
          </NavLink>
          <NavLink to="/Contact" activeStyle>
            Contact Us
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
