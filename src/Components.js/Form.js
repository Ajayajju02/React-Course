import { data } from 'autoprefixer'
import React from 'react'
import { useForm } from 'react-hook-form'

function Form({handleClick}) {
  const {register, handleSubmit, reset} = useForm()
  const handleForm = (data)=>{
    handleClick(data);
    reset();
  }
  return (
    <div className='mt-10 flex gap-10 justify-center'>
      <form className='flex gap-10' onSubmit={handleSubmit(handleForm)}>
        <input {...register('name')} className='rounded-md px-2 py-1 text-base font-semibold outline-none' type="text" placeholder='name'/>
        <input {...register('email')} className='rounded-md px-2 py-1 text-base font-semibold outline-none' type="email" placeholder='email'/>
        <input {...register('image')} className='rounded-md px-2 py-1 text-base font-semibold outline-none' type="text" placeholder='image url'/>
        <input className='px-5 py-1 rounded-md bg-blue-500 text-white font-semibold' type="Submit" />
      </form>
    </div>
  )
} 

export default Form