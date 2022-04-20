import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const PokemonsCards = ({ pokemonsUrl }) => {


    const [pokemons, setPokemons] = useState({});

    useEffect(() => {
        axios.get(pokemonsUrl)
            .then(res => setPokemons(res.data))

    }, [pokemonsUrl])

    return (
        <li className='col'>
            <Link to={`/pokemons/${pokemons.id}`} className="pokemons-card" >
                <h3>{pokemons.name}</h3>
                <img src={pokemons.sprites?.other.home.front_default} alt="" />

                <ul className='location__list'>
                    <li cl><span className='lotation_list-subtitle'> </span><b>Tipo </b>{pokemons.types?.[0].type.name}</li>
                    <li cl><span className='lotation_list-subtitle' > </span><b>altura</b> {pokemons.height}M</li>
                    <li cl><span className='lotation_list-subtitle'> </span><b>Peso</b> {pokemons.weight}Kg</li>
                </ul>

            </Link>
        </li>
    );
};

export default PokemonsCards;