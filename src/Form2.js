// Controlled Components => React mein Controlled Components aise components hote hain jo apne input elements ( jaise <input>, <textarea>, <select>) ke values ko React ke state ke jariye manage karte hain. iska matlab yeh hai ki form elements ki value React component ki state ke andar rahti hai aur ise React ke jariye control kiya jata hai.

// 1 State Driven: Form element ki value React component ki state main stored hoti hai.
// 2 Two-Way Binding: Input field or state ke bich ek two-way binding hoti hai.
// 3 Event Handler: onChange event handler ke jariye state ko update kiya jata hai.

import { eventWrapper } from '@testing-library/user-event/dist/utils';
import React, { useState } from 'react'

function Form2() {
    const [val, setVal] = useState({name: "", email: ""});
    const handleClick = (event)=>{
        event.preventDefault();
        console.log(val);
    }
  return (
    <div className='p-5'>
        <form action="" onSubmit={handleClick}>
            <input onChange={(event)=>setVal({...val, name:event.target.value})} type="text" placeholder='name' />
            <input onChange={(event)=>setVal({...val, email:event.target.value})} type="email" placeholder='email' />
            <input type="Submit" />
        </form>
    </div>
  )
}

export default Form2