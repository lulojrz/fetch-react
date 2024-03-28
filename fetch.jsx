import React from 'react'
import { useEffect, useState } from 'react';

const Fetch = () => {
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        llamadaApi();
    }, [])

    const llamadaApi = async () => {
        const peticion = await fetch('https://pokeapi.co/api/v2/pokemon/');
        const { results } = await peticion.json();

        setPokemons(results);
    }
    console.log(pokemons)
    return (
        <>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">URL</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        pokemons.map(pokemon => {
                            return(
                                <tr key={pokemon.url}>
                                <td >{pokemon.name}</td>
                                <td> <a href={pokemon.url}>URL</a>
                                    </td>

                            </tr>

                            )
                         
                        })

                    }
                </tbody>
            </table>


        </>
    )
}

export default Fetch
