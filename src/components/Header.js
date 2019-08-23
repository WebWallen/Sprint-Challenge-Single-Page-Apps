import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import "../index.css";

const NavMenu = styled.nav`
    position: relative;
    display: flex;
    justify-content: space-evenly;
    margin-bottom: 40px;
    font-family: Arial;
    font-size: 1.5em;
`

export default function Header() {
  return (
    <>
    <div className="nav">
    <NavMenu>
        <NavLink className="menu-option" exact to="/">Home Page</NavLink>
        <NavLink className="menu-option" to="/characters">Characters</NavLink>
        <NavLink className="menu-option" to="/locations">Locations</NavLink>
    </NavMenu>
  </div>
    <header className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
    </header>
    </>
  );
}
