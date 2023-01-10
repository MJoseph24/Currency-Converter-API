import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";
const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to="/Home" activeStyle>
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
