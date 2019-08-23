import React, { useEffect, useState } from "react";
import axios from "axios";
import EpisodeCard from "./EpisodeCard";

export default function LocationList() {
    const [episodesArray, setEpisodes] = useState([]);

    useEffect(() => {
        axios
            .get('https://rickandmortyapi.com/api/episode/')
            .then(response => {
                console.log(response);
                const episodes = response.data.results;
                setEpisodes(episodes);
            })
            .catch(err => {
                console.log(err);
            })
    }, [episodesArray]);

    return (
        <section className="episode-list grid-view">
            {
                episodesArray.map(episode => <EpisodeCard result = { episode } />)
            }
        </section>
    )
}