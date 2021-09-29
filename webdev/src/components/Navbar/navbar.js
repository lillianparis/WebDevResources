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
          <img src={logo} />{" "}
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
      <NavItem href="/"> Home </NavItem>{" "}
      <NavItem href="/about"> Learn More </NavItem>{" "}
      <NavItem href="components.html"> Good Reads </NavItem>{" "}

      <NavItem href="/resources"> Resources </NavItem>{" "}
      <NavItem href="components.html"> Exercises </NavItem>{" "}
      <NavItem href="/notes"> Notes </NavItem>{" "}
      <NavItem href="/notes"> Blog </NavItem>{" "}
    </Navbar>
  );
}

export default Header;
