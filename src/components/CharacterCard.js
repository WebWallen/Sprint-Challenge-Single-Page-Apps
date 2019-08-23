import React from "react";
import styled from "styled-components";

const GridContainer = styled.div`
    display: inline-grid;
    grid-template-columns: auto auto auto;
    background-color: transparent;
    padding: 10px;
`

const GridItem = styled.div`
  background-color: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(0, 0, 0, 0.8);
  padding: 20px;
`

const CharacterCard = props => {
  return (
    <GridContainer>
      <GridItem>
        <img src={props.result.image} />
        <h2>{props.result.name}</h2>
        <p>{props.result.status}: {props.result.species}</p>
        <p>{props.result.location.name}</p>
        {/* <p>{props.result.location}</p> */}
        {/* <p>{props.result.origin}</p> */}
      </GridItem>
    </GridContainer>
  )
}

export default CharacterCard;