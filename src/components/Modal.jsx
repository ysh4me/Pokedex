import React from 'react';

export default function Modal({
  onClick,
  id,
  name,
  image,
  type,
  height,
  weight,
  stats,
  statsName,
}) {
  return (
    <div className='block p-6 m-6 bg-white border border-gray-200 rounded-lg shadow image'>
      <div className='flex justify-end m-3'>
        <span
          onClick={onClick}
          className='cursor-pointer m-2 p-[2px] px-[9px] rounded-full border border-primary-50 bg-primary-50 w-[30px]'
        >
          X
        </span>
      </div>
      <div className='flex justify-center'>
        <div className='flex w-full justify-around 2xl:flex-row xl:flex-row lg:flex-row md:flex-col sm:flex-col 2xs:flex-col'>
          <div className='w-[90%] flex justify-center items-center'>
            <img src={image} alt={name} />
          </div>
          <div className='w-full'>
            <div className='flex flex-row items-center justify-center'>
              <div className='flex flex-row items-center justify-center w-[90%] poke_bande border border-gray-200 rounded-lg shadow'>
                <img
                  src={image}
                  alt={name}
                  className='w-[50px] m-1 ml-[20px]'
                />
                <p className='m-1 w-full'>No. {id}</p>
                <p className='m-1 w-[300px] flex justify-end text-white'>
                  {name}
                </p>
                <img
                  src='/images/pokeball_blanc.png'
                  alt='pokeball'
                  className='w-[20px] mr-[35px] ml-[20px]'
                />
              </div>
            </div>
            <div className='flex m-3 justify-center mt-10 border border-gray-200 rounded-lg shadow'>
              <div className='flex flex-col items-start bg-[#e2e0dd] w-[50%] rounded-tl-lg rounded-bl-lg'>
                <p className='m-1  p-1 flex justify-center'>Type</p>
                <p className='m-1  p-1 flex justify-center'>Height</p>
                <p className='m-1  p-1 flex justify-center'>Weight</p>
              </div>
              <div className='flex flex-col items-start bg-[#fffeff] w-[50%] rounded-tr-lg rounded-br-lg'>
                <p className='m-1  p-1 flex justify-start'>{type}</p>
                <p className='m-1 p-1 flex justify-start'>{height}0 cm</p>
                <p className='m-1 p-1 flex justify-start'>{weight} lbs</p>
              </div>
            </div>
            <div className='flex m-3 justify-center mt-10 border border-gray-200 rounded-lg shadow'>
              <div className='flex flex-col items-start bg-[#636361] w-[50%] rounded-tl-lg rounded-bl-lg'>
                {statsName.map((stats) => (
                  <p className=' flex justify-center text-white p-1 m-1'>
                    {stats}
                  </p>
                ))}
              </div>
              <div className='flex flex-col items-start bg-[#636361] w-[50%] rounded-tr-lg rounded-br-lg'>
                {stats.map((stats) => (
                  <p className=' flex justify-center text-white p-1 m-1'>
                    {stats}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
