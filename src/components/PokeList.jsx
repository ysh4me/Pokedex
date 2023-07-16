import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import PokemonCard from './PokemonCard';

export default function PokeList() {
  const [allPokemons, setAllPokemons] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const getAllPokemons = async () => {
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
  };

  useEffect(() => {
    getAllPokemons();
  }, []);

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <>
      <Navbar />
      <div className='flex justify-center flex-col'>
        <h1 className='flex justify-center m-5'>ALL POKÉMON</h1>
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
