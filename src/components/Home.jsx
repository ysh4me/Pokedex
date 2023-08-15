import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar />
      <div className=''>
        <div className='flex flex-col items-center justify-center p-6 m-6 bg-transparent border border-gray-500 rounded-lg shadow parallax'>
          <h2 className='text-2xl font-bold mb-4 text-black'>
            Welcome to the Pokemon world
          </h2>
          <p className='text-xl text-black mb-8'>
            Discover hundreds of exciting Pokemon and go on an adventure!
          </p>
          <button
            className='px-6 py-3 focus:ring-primary-200 bg-primary-100 hover:bg-primary-200 text-white rounded-lg font-medium hover:bg-primary-600'
            onClick={() => navigate('/components/PokeList')}
          >
            Start
          </button>
        </div>
        <div className='cards'>
          <div className='card squirtle animated'></div>
          <div className='card charmander animated'></div>
          <div className='card bulbasaur animated'></div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
