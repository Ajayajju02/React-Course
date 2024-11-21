// USEREF => React mein, useRef ek Hook hai jo react Functional Components mein reference banane or manage karne ke liye upyog kiya jata hai. yah react ka ek built-in features hai, jiska upyog DOM Elements ya kisi bhi mutable value ko rendering trigar kiye bina store karne ke liye kiya jata hai.


import React, { useRef } from 'react'

function Form() {
    const name = useRef(null);
    const age = useRef(null);
    const handleClick = (event)=>{
        event.preventDefault();
        console.log(name.current.value, age.current.value);
    }
  return (
    <div className='p-5'>
        <form action="" onSubmit={handleClick}>
            <input ref={name} type="text" placeholder='name' />
            <input ref={age} type="number" placeholder='age' />
            <input type="Submit" />
        </form>
    </div>
  )
}

export default Form