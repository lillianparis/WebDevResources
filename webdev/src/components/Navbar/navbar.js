import React from "react";
import { Navbar, Icon, NavItem } from "react-materialize";
import "materialize-css";
import logo from "../../images/webdevlogo2.png";
import "./style.css";

function Header() {
  return (
    <Navbar
      alignLinks="left"
      brand={
        <a class="brand-logo center">
          <img src={logo}/>
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
      <NavItem href="/about"> About US! </NavItem>{" "}
      <NavItem href="components.html"> Good Reads </NavItem>{" "}
      <NavItem href="components.html"> Resources </NavItem>{" "}
      <NavItem href="components.html"> Exercises </NavItem>{" "}
    </Navbar>
  );
}

export default Header;
