import React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios'

const PokePic = props => {

    const [pokemon, setPokemon] = useState([])
    const {name} = props.match.params;

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${props.match.params.name}`)
            .then(response => {
                setPokemon(response.data)
            })
       
    }, [props.match.params.name])

    return(
        <div>
           <h2>
            {pokemon.name}
            <img alt={pokemon.name} src={pokemon.sprites?.front_default} />

        </h2> 
        </div>
        
    )

}
export default PokePic;