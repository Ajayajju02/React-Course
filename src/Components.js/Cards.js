import React from 'react'
import Card from './Card'

function Cards({users,handleRemove}) {
  return (
    <div className='w-[200vh] p-5 flex justify-center gap-4 flex-wrap max-h-96 overflow-auto'>
      {users.map((item, index)=>{
        return <Card handleRemove={handleRemove} id={index} key={index} user={item} />
      })}
    </div>
  )
}   

export default Cards