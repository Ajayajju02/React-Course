import React, { useState } from 'react'
import Navbar from './Navbar'
import Card from './Card'

const App = () => {
  const data = [
    {songname: "Tum Hi Ho",  artist: "Arijit Singh", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRavb4iXjL2lM5hn7SpfP7DGRW5bKr8EqGZxBSx8nYSeGUZib9LqDB2HZV68lSWbVsSsXA&usqp=CAU", added: false},
    {songname: "No Love", artist: "Shubh", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv-pcjjK3yhLgTxQD5GPPFu2F5pEasiLIjHjuHcW_4i2SQIdTmJV0aikP4rR7435ZNI1M&usqp=CAU", added: false},
    {songname: "Mi Amor", artist: "Sharn", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5dOBFhJMLFMFa9BkHEFaGy7iInmgO57sxqA&s", added: false},
    {songname: "One Love", artist: "Shubh", image: "https://i.ytimg.com/vi/0pWsCiBvLOk/sddefault.jpg", added: false},
  ]

  const [set, setVal] = useState(data);
  const handleClick = (index)=>{
    setVal ((prev)=>{
      return prev.map((item, itemindex)=>{
        if(itemindex === index) return {...item, added: !item.added};
        return item;
      })
    })
  }


  return (
    <div className='w-full h-screen bg-zinc-300'>
      <Navbar data={set} />
      <div className='flex px-10 gap-10 flex-wrap'>
        {set.map((items, index)=>(
          <Card data={items} handleClick={handleClick} index={index} key={index}/>
        ))}
      </div>
    </div>
  )
}

export default App