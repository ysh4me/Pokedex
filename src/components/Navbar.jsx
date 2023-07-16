import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  const handlePopupOpen = () => {
    setIsOpen(true);
  };

  return (
    <header>
      <nav className='bg-white border-gray-200 dark:bg-gray-900 mt-2'>
        <div className='flex flex-wrap items-center justify-between mx-auto p-4 bg-primary-50 px-10 ombre'>
          <NavLink to='/components/Home' className='flex items-center'>
            <img src='/images/pokeball.svg' className='h-8 mr-3' alt='Logo' />
            <span className='self-center text-2xl font-semibold whitespace-nowrap text-primary-200 dark:text-white pokedex'>
              Pokedex
            </span>
          </NavLink>
          <button
            data-collapse-toggle='navbar-default'
            type='button'
            className='inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
            aria-controls='navbar-default'
            aria-expanded='false'
          >
            <span className='sr-only'>Open main menu</span>
            <svg
              className='w-5 h-5'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 17 14'
            >
              <path
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M1 1h15M1 7h15M1 13h15'
              />
            </svg>
          </button>
          <div className='hidden w-full md:block md:w-auto' id='navbar-default'>
            <ul className='font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700'>
              <li>
                <NavLink
                  to='/components/Home'
                  className='block py-2 pl-3 pr-4 text-white hover:text-primary-200 rounded md:p-0 dark:text-white'
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='/components/PokeList'
                  className='block py-2 pl-3 pr-4 text-white hover:text-primary-200 rounded md:border-0  md:p-0 dark:text-white dark:hover:text-white'
                >
                  All Pokemons
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='/components/Recherche'
                  className='block py-2 pl-3 pr-4 text-white hover:text-primary-200 rounded md:border-0  md:p-0 dark:text-white dark:hover:text-white'
                  onClick={handlePopupOpen}
                >
                  Search
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
