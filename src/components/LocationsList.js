import React, { useEffect, useState } from "react";
import axios from "axios";
import LocationCard from "./LocationCard";

export default function LocationList() {
    const [locationsArray, setLocations] = useState([]);

    useEffect(() => {
        axios
            .get('https://rickandmortyapi.com/api/location/')
            .then(response => {
                console.log(response);
                const locations = response.data.results;
                setLocations(locations);
            })
            .catch(err => {
                console.log(err);
            })
    }, [locationsArray]);

    return (
        <section className="location-list grid-view">
            {
                locationsArray.map(location => <LocationCard result = {location } />)
            }
        </section>
    )
}