import React from 'react';

export default function Footer() {
  return (
    <footer className='w-full bg-primary-300 '>
      <div className='flex flex-row gap-5 justify-center flex-wrap'>
        <div className='flex'>
          <p className='m-2 p-[2px] px-[9px] rounded-full border border-primary-50 bg-primary-50'>
            A
          </p>
          <p className='m-3 text-white'>Voir les dÉtails</p>
        </div>
        <div className='flex'>
          <p className='m-2 p-[2px] px-[9px] rounded-full border border-primary-50 bg-primary-50'>
            X
          </p>
          <p className='m-3 text-white'>Habitat</p>
        </div>
        <div className='flex'>
          <p className='m-2 p-[2px] px-[9px] rounded-full border border-primary-50 bg-primary-50'>
            Y
          </p>
          <p className='m-3 text-white'>Trier</p>
        </div>
        <div className='flex'>
          <p className='m-2 p-[2px] px-[9px] rounded-full border border-primary-50 bg-primary-50'>
            B
          </p>
          <p className='m-3 text-white'>Retour</p>
        </div>
        <div className='flex'>
          <p className='m-2 p-[2px] px-[9px] rounded-full border border-primary-50 bg-primary-50'>
            +
          </p>
          <p className='m-3 text-white'>Menu</p>
        </div>
      </div>
    </footer>
  );
}
