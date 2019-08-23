import React from "react";
import styled from "styled-components";

let GridContainer = styled.div`
    display: inline-grid;
    grid-template-columns: auto;
    background-color: transparent;
    padding: 10px;
    width: 500px;
`

let GridItem = styled.div`
  background-color: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(0, 0, 0, 0.8);
  padding: 20px;
  text-align: center;
`

const EpisodeCard = props => {
  return (
    <div className="episode-card">
    <GridContainer>
      <GridItem>
        <strong><h2>{props.result.name}</h2></strong>
        <strong>Air Date:</strong> <p>{props.result.air_date}</p>
        <strong>Episode Number:</strong> <p>{props.result.episode}</p>
      </GridItem>
    </GridContainer>
    </div>
  )
}

export default EpisodeCard;