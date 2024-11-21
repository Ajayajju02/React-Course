// React Hook form => React Hook Form ek lightweight library hai jo React applications mein forms banane aur unka validation karne ke liye use hota hai. Ye library React ke Hooks ka istemal karke forms ko manage karta hai, aur iski sabse badi khaas baat hai ki ye performance-efficient aur simple hai.

// React Hook Form ka Features:
// 1. Minimal re-renders: Form ke components kam se kam re-render hote hain, jo application ko fast banata hai.
// 2. Easy to use: Simple API aur React Hooks ka use karke form banana aur validate karna asaan hai.
// 3. Validation: Built-in validation hai jo HTML standard validation attributes aur custom rules ko support karta hai.
// 4. Integration: Ye libraries jaise Yup, Zod, aur joi ke saath asaani se integrate hota hai advanced validation ke liye.
// 5. Small size: Ye library lightweight hai, jo bundle size ko chhota rakhta hai.
// 6. TypeScript support: Agar aap TypeScript use karte hain, to ye strongly typed forms ka support deta hai.

// Code ka Explanation:
// 1. useForm Hook: Ye form ko handle karne ke liye core hook hai.
// 2. register (onBlur, onChange, ref): Form ke fields ko register karta hai taaki unka data aur validation track ho sake.
// 3. handleSubmit: Form submit hone par callback function execute karta hai.
// 4. errors: Validation errors ko track karta hai aur display karne ke liye use hota hai.

import React from 'react'
import { useForm } from 'react-hook-form'

function Form3() {
    const {register, handleSubmit} = useForm();
  return (
    <div className='p-5'>
        <form action="" onSubmit={handleSubmit(data=>console.log(data))}>
            <input {...register('name')} type="text" placeholder='name' />
            <input {...register('email')} type="email" placeholder='email' />
            <input type="Submit" />
        </form>
    </div>
  )
}

export default Form3