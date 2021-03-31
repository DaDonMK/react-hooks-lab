import {useState, useEffect} from 'react'
import axios from 'axios'
import React from 'react'
import PrintPokemon from './printPokemon'
import {Link} from 'react-router-dom'

const GetPokemon = (props) => {

    const [getPokemon, setgetPokemon] = useState([])

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon')
        .then(response => {
            setgetPokemon(response.data.results)
        })

        return(
            console.log()
        )

    }, [])
    return(
        <div>
            {getPokemon.map((element) => {
                return(
                    <Link  key={element.url} to={`/pokemon/${element.name}`}>
                    <h2>{element.name}</h2>
                     </Link> 
                )
           
            })}
            

        </div>
        
        // <PrintPokemon printThis = {getPokemon}/>
    )
}
export default GetPokemon;


// import React, { useState, useEffect } from 'react'
// import { Link } from 'react-router-dom'
// import axios from 'axios'

// const GetPokemon = (props) => {
//   const [list, setList] = useState([])

//   useEffect(() => {
//     axios.get('https://pokeapi.co/api/v2/pokemon').then((res) => {
//       setList(res.data.results)
//     })
//   }, [])

//   return (
//     <div>
//       {list.map((pokemon) => {
//         return (
//           <Link key={pokemon.url} to={`/pokemon/${pokemon.name}`}>
//             <h2>{pokemon.name}</h2>
//           </Link>
//         )
//       })}
//     </div>
//   )
// }
// export default GetPokemon