import React from 'react';

function Card({user, handleRemove, id}) {
  return (
     <div className='w-40 h-[45vh] bg-zinc-100 rounded-lg flex flex-col items-center p-2'>
        <div className='image w-20 h-20 rounded-full bg-blue-800 overflow-hidden'>
        <img className='w-full h-full object-cover' src={user.image} alt="" />   
        </div>
        <h1 className='font-semibold mt-1'>{user.name}</h1>
        <h4 className='opacity-40'>{user.email}</h4>
        <p className='mt-1 text-center text-xs '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident, maiores quod! Nostrum eligendi perferendis. </p>
        <button onClick={()=>handleRemove(id)} className='px-3 py-1 bg-red-500 text-xs rounded-lg font-semibold text-white mt-3'>Remove It</button>
      </div>
  );
}

export default Card;