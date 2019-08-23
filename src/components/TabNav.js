import React from "react";
import { Tab, Menu, Icon } from "semantic-ui-react";
import { Route, NavLink } from "react-router-dom";
import WelcomePage from "./WelcomePage";
import CharacterList from "./CharacterList";
import LocationList from "./LocationsList";

// TODO: Add missing tabs below
// Take a look at React Semantic UI tabs 
// https://react.semantic-ui.com/modules/tab/
export default function TabNav() {
    return (
            <>
            <div className="routes">
                <Route exact path="/" component={WelcomePage} />
                <Route path="/characters" component={CharacterList} />
                <Route path="/locations" component={LocationList} />
            </div> 

            <div className="nav">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/characters">Characters</NavLink>
                <NavLink to="/locations">Locations</NavLink>
            </div>

            </>
    )
    
}

