import React, { useState } from 'react'
import Cards from './Components.js/Cards'
import Form from './Components.js/Form'

function App() {
  const [users, setUsers] = useState([]);

  const handleClick = (data)=>{
    setUsers([...users, data])
  }

  const handleRemove = (id) =>{
    setUsers(()=>users.filter((item, index)=>index!=id));
  }

  return (
    <div className='w-full h-screen bg-zinc-300 flex items-center justify-center'>
      <div className=' mx-auto'>
        <Cards handleRemove={handleRemove} users={users} />
        <Form handleClick={handleClick} />
      </div>
    </div>
  )
}

export default App