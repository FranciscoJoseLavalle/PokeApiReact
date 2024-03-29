import { useEffect } from 'react'
import { useState } from 'react';

import axios from 'axios'

import './Pokemons.css';
import { Pokemon } from '../Pokemon/Pokemon';

export const Pokemons = () => {
    const [allPokemons, setAllPokemons] = useState([]);
    const [offset, setOffset] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const limit = 8;

    document.addEventListener('scroll', () => {
        if (
            (window.innerHeight + window.scrollY)
            >= document.body.offsetHeight
            && !isLoading
        ) {
            setIsLoading(true)
            setOffset(previous => previous + limit)
        }
    })
    document.addEventListener('touchmove', () => {
        if (
            (window.innerHeight + window.scrollY)
            >= document.body.offsetHeight
            && !isLoading
        ) {
            setIsLoading(true)
            setOffset(previous => previous + limit)
        }
    })

    useEffect(() => {
        getAllPokemons()
    }, [offset])

    const getAllPokemons = () => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`)
            .then(res => {
                getPokemon(res.data.results);
            })
    }

    const getPokemon = async (pokemons) => {
        const promises = pokemons.map(async pokemon => {
            const res = await fetch(pokemon.url);
            return res.json();
        });
        const results = await Promise.all(promises);
        console.log(results);
        setAllPokemons(allPokemons.concat(results));
        setIsLoading(false)
    }

    return (
        <div className='pokemons'>
            {allPokemons.map(pokemon => (
                <Pokemon key={pokemon.id} pokemon={pokemon} />
            ))}
            {isLoading && <p>Cargando...</p>}
        </div>
    )
}
