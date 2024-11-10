import React, { useState } from 'react'
import Project3 from './Project3'

function Main (){
  const userData = [
    {name: "Professor", profession: "Group Leader", image: "https://i.pinimg.com/736x/cf/0b/74/cf0b7475f26c043b55fe50cfb98c15d5.jpg", friends: false},

    {name: "Berlin", profession: "Actor", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkEzxVERDj-i2-H_-E8fubLEk9NQFPDm9H2EsOXPViO58KJ503uEss92eJ7AE4vHsLMTw&usqp=CAU", friends: false},

    {name: "Rio", profession: "Hacker", image: "https://wallpapercave.com/wp/wp5954527.jpg", friends: false },

    {name: "Tokyo", profession: "Commando", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLQR3gOEP1F1gw0hyMGpmVZLpjGze1riB631MSGvlt8FMzjxQ1j4r5pamXeASBhXOXlKQ&usqp=CAU", friends: false}
  ];

  const [data, setData] = useState(userData);
  const clickBtn = (cardindex)=>{
    setData((prev)=>{
      return prev.map((item,index)=>{
        if(index === cardindex){
          return {...item, friends: !item.friends}
        }
        return item;
      })   
    })
  }
  
  return (
    <div className='w-full h-screen bg-zinc-300 gap-10 flex items-center justify-center'>
      <h1 className='w-72 text-6xl text-white font-semibold absolute top-[50px] bg-[#375794] rounded flex justify-center pb-2 '>facebook</h1>
    {data.map((item,index)=>(
      <Project3 key={index} index={index} handleClick={clickBtn} values={item} />
    ))}
    </div>
  )
}

export default Main