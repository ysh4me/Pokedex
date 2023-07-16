import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import PokemonCard from './PokemonCard';

export default function Recherche() {
  const [allPokemons, setAllPokemons] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const getAllPokemons = async () => {
    setAllPokemons([]);

    if (searchValue !== '') {
      const res = await fetch(
        'https://pokeapi.co/api/v2/pokemon?limit=649&offset=0'
      );
      const data = await res.json();

      function createPokemonObject(results) {
        results.forEach(async (pokemon) => {
          const res = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
          );
          const data = await res.json();

          if (data.name.includes(searchValue.toLowerCase())) {
            setAllPokemons((currentList) => [...currentList, data]);
            await allPokemons.sort((a, b) => a.id - b.id);
          }
        });
      }
      createPokemonObject(data.results);
    }
  };

  useEffect(() => {
    getAllPokemons();
  }, []);

  const handleSearchChange = async (event) => {
    setSearchValue(event.target.value);
    await getAllPokemons();
  };

  const handleSearch = () => {
    getAllPokemons();
  };

  return (
    <>
      <Navbar />
      <div>
        <div className='relative m-10'>
          <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
            <svg
              className='w-4 h-4 text-gray-500'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 20 20'
            >
              <path
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'
              />
            </svg>
          </div>
          <input
            type='search'
            id='default-search'
            className='block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-primary-200 focus:border-primary-200'
            placeholder='Rechercher un PokÉmon...'
            value={searchValue}
            onChange={handleSearchChange}
            required
          />
          <button
            type='submit'
            onClick={handleSearch}
            className='text-white absolute right-2.5 bottom-2.5 bg-primary-100 hover:bg-primary-200 focus:ring-primary-200 font-medium rounded-lg text-sm px-4 py-2'
          >
            Search ...
          </button>
        </div>
        <div>
          {allPokemons.map((pokemonStats) => (
            <PokemonCard
              key={pokemonStats.name}
              id={pokemonStats.id.toString().padStart(3, '0')}
              image={
                pokemonStats.sprites.other['official-artwork'].front_default
              }
              name={pokemonStats.name.replace(/^./, (str) => str.toUpperCase())}
              type={pokemonStats.types[0].type.name}
              weight={pokemonStats.weight}
              height={pokemonStats.height}
              stats={pokemonStats.stats
                .map((stat) => stat.base_stat)
                .slice(0, 3)}
              statsName={pokemonStats.stats
                .map((stat) => stat.stat.name)
                .slice(0, 3)}
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
