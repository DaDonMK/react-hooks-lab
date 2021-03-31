import React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios'
import PrintCats from './printCats'

const GetCats = () => {

    const [cats, setCats] = useState([])
 
    useEffect(() => {
        axios.get('https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=1')
        .then(response => {
            setCats(response.data.text)
        })

    }, [])

    return (
        <PrintCats cats={cats}/>
    )

}

export default GetCats;