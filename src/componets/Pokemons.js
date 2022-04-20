import axios from 'axios';
import React, { useEffect, useState } from 'react';



import { useSelector } from 'react-redux';
import PokemonsCards from './PokemonsCards';
import { useNavigate } from 'react-router-dom';


const Pokemons = () => {

    const userName = useSelector(state => state.userName);
    const [types, setTypes] = useState([]);
    const [pokemons, setPokemons] = useState([]);

    const [pokemonName, setpokemonName] = useState("");
    const navigate = useNavigate();

    //pagination
    const [page, setPage] = useState(1);
    const itemNumber = 6;
    const lastIndex = page * itemNumber;
    const fistIndex = lastIndex - itemNumber;
    const totalpages = Math.ceil(pokemons?.length / itemNumber)
    const pokemonPaginated = pokemons?.slice(fistIndex, lastIndex);
    const pagesNumbers = []
    for (let i = 1; i <= totalpages; i++) {
        pagesNumbers.push(i)
    }

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1126')
            .then(res => setPokemons(res.data.results))

        axios.get('https://pokeapi.co/api/v2/type')
            .then(res => setTypes(res.data.results))
    }, []);

    const submit = e => {
        e.preventDefault();
        navigate(`/pokemons/${pokemonName}`);
    }

    return (
        <div className='fondo'>
            <div>

                <div className='container'>
                    <div className='location'>
                        <ul className='location__list'>

                            <form onSubmit={submit} >
                                <div className='container'>


                                    <label htmlFor="pokemons-name" ></label>
                                    <input className='header__search-input'
                                        type="text"
                                        placeholder='Busca tu pokemon favorito'
                                        id="pokemons-name"
                                        value={pokemonName}
                                        onChange={e => setpokemonName(e.target.value)}
                                    />
                                    <button className='button_success' >
                                        <i className="fas fa-search"></i>  Buscar
                                    </button>
                                </div>
                            </form>

                        </ul>
                    </div>
                </div>

                <button className='button_delete_circle' onClick={() => setPage(Math.random() * totalpages)}
                    disabled={page >= totalpages}
                > <i className="fas fa-forward"></i>Refrescar
                </button>

                <ul className='pokemons-list'>
                    {
                        pokemonPaginated.map(pokemons => (

                            <PokemonsCards
                                pokemonsUrl={pokemons.url ? pokemons.url : pokemons.pokemon.url}
                                key={pokemons.url ? pokemons.url : pokemons.pokemon.url} />
                        ))
                    }
                </ul>
            </div>
        </div>

    );
};

export default Pokemons;