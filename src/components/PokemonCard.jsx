import React, { useState } from 'react';
import Modal from './Modal';

export default function PokemonCard({
  id,
  name,
  image,
  type,
  weight,
  height,
  stats,
  statsName,
}) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function modalHandler() {
    setModalIsOpen(true);
  }

  function closeModalHandler() {
    setModalIsOpen(false);
  }

  return (
    <div>
      <div
        className='flex flex-row items-center w-[98%] justify-center poke_bande m-2 pl-10 border border-gray-200 rounded-lg shadow'
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
        onClick={modalHandler}
      >
        <img src={image} alt={name} className='w-[50px] m-1' />
        <p className='m-1 w-full'>No. {id}</p>
        <p className='m-1 w-[250px] flex justify-center text-white'>{name}</p>
        <img
          src='/images/pokeball_blanc.png'
          alt='pokeball'
          className='w-[20px] mr-10'
        />
      </div>

      {modalIsOpen && (
        <Modal
          id={id}
          name={name}
          image={image}
          height={height}
          weight={weight}
          stats={stats}
          statsName={statsName}
          type={type}
          onClick={closeModalHandler}
        />
      )}
    </div>
  );
}
