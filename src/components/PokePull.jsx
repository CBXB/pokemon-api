import React, { useState, useEffect } from 'react'
import axios from 'axios'


const PokePull = () => {
    let [state, setState] = useState ([]);
    let [count, setCount] = useState (0);

    //We use effect to consume API's
    useEffect(() => {
        if (count > 0){
            axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
            // .then(res => res.json())
            .then(res => {
                state = res.data.results; 
                setState([...state])}
                );
                // console.log(response);
                console.log(state);  

        }
    }, [count]);

    const onClickHandler = () => {
        console.log(state); 
        // count++;
        if(count === 0){
            setCount(1);
        }
        else{
            setCount(0);
            setState([]);
        }
        console.log(count); 
    };

    return (
        <div>
            <button onClick={onClickHandler}>{count === 0 ? "Fetch Pokemon" : "Come back!"}</button>
            <ul>
            {state.map((item, index) => {
                return (<div key={index}>{item.name}</div>)
            })}

            </ul>
        </div>
    );
}

export default PokePull;


