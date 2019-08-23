import React from "react";
import { NavLink, Route } from "react-router-dom"
import styled from "styled-components";
import "../index.css";
import CharacterList from "./CharacterList";
import LocationList from "./LocationsList";
import EpisodeList from "./EpisodeList";
import WelcomePage from "./WelcomePage";

const Nav = styled.nav`
    position: relative;
    display: flex;
    justify-content: space-evenly;
    margin: 40px 0 40px 0;
    font-family: Arial;
    font-size: 1.5em;
`

export default function NavMenu() {
  return (
    <>
    <div className="nav">
    <Nav>
        <NavLink className="menu-option" exact to="/">Home Page</NavLink>
        <NavLink className="menu-option" to="/characters">Characters</NavLink>
        <NavLink className="menu-option" to="/locations">Locations</NavLink>
        <NavLink className="menu-option" to="/episodes">Episodes</NavLink>
    </Nav>
    </div>
    <div className="routes">
      <Route exact path="/" component={WelcomePage} />
      <Route exact path="/characters" component={CharacterList} />
      <Route exact path="/locations" component={LocationList} />
      <Route exact path="/episodes" component={EpisodeList} />
    </div>
    </>
  );
}
