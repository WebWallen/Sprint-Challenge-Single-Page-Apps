import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [charactersArray, setCharacters] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
      .get('https://rickandmortyapi.com/api/character/')
      .then(response => {
        console.log(response);
        const characters = response.data.results;
        setCharacters(characters);
      })
      .catch(err => {
        console.log(err);
      })

  }, [charactersArray]);

  return (
    <section className="character-list grid-view">
      {
        charactersArray.map(character => <CharacterCard result = {character} />)
      }
    </section>
  );
}