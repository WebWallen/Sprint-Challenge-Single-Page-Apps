import React from "react";
import styled from "styled-components";
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

            </>
    )
    
}

