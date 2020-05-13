import React, { useState, useEffect } from 'react'

const PokePull = (props) => {
    const [pokemon, setPokemon] = useState ([]);
    const [render, setRender] = useState (0);

    //We use effect to consume API's
    useEffect(() => {
        console.log("API Call")
        fetch('https://pokeapi.co/api/v2/pokemon?limit=807')
            .then(res => res.json())
            .then(res => setPokemon(res.results))
    }, [render]);

    const refreshPage = () => {
        setRender(render + 1);
    };

    return (
        <div>
            <button onClick={refreshPage}>Click to reload from API</button>
            <ul>
            {pokemon.length > 0 && pokemon.map((poke, index)=>{
                return (<div key={index}>{poke.name}</div>)
            })}

            </ul>
        </div>
    );
}

export default PokePull;


