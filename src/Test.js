import React, { useRef } from 'react'

const Test = () => {
    const name = useRef(null);
    const handleClick = (event)=>{
        event.preventDefault();
        alert(name.current.value);
    }
  return (
    <div>
        <form action="" onSubmit={handleClick}>
            <input ref={name} type="text" placeholder='name' />
            <input type="Submit"/>
        </form>
    </div>
  )
}

export default Test