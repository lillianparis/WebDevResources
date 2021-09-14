import React from "react";
import { Navbar, Icon, NavItem } from "react-materialize";
import "materialize-css";

function Header() {
  return (
    <Navbar
      alignLinks="left"
      brand={
        <a className="brand-logo" href="/">
          Logo
        </a>
      }
      centerLogo
      id="mobile-nav"
      menuIcon={<Icon> menu </Icon>}
      options={{
        draggable: true,
        edge: "left",
        inDuration: 250,
        onCloseEnd: null,
        onCloseStart: null,
        onOpenEnd: null,
        onOpenStart: null,
        outDuration: 200,
        preventScrolling: true,
      }}
    >
      <NavItem href="/about">About US! </NavItem>
      <NavItem href="components.html">Components </NavItem>
    </Navbar>
  );
}

export default Header;
