import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar />
      <div className='h-[880px]'>
        <div>
          <img
            className='object-cover w-full h-full'
            src='/images/pokemon-landscape.gif'
            alt='Pokémon Landscape'
          />
        </div>
        <div className='flex flex-col items-center justify-center p-6 m-6 bg-transparent border border-gray-200 rounded-lg shadow parallax'>
          <h2 className='text-2xl font-bold mb-4 text-white'>
            Welcome to the PokÉmon world
          </h2>
          <p className='text-xl text-white mb-8'>
            Discover hundreds of exciting PokÉmon and go on an adventure!
          </p>
          <button
            className='px-6 py-3 bg-primary-100 hover:bg-primary-200 text-white rounded-lg font-medium hover:bg-primary-600'
            onClick={() => navigate('/components/PokeList')}
          >
            Start
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
