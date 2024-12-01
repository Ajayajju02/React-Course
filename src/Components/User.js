import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const User = () => {
  return (
    <div className='w-1/2 mt-5 p-5'>
        <h1 className='text-blue-600 text-3xl'>User</h1>

       <div className='flex flex-col w-fit font-semibold gap-5 mt-5'>
        <Link className='text-[20px]  bg-sky-300 px-3 rounded-md hover:bg-blue-400' to={"/user/nobita"}>Nobita</Link>
        <Link className='text-[20px]  bg-sky-300 px-3 rounded-md hover:bg-blue-400' to={"/user/doremon"}>Doremon</Link>
        <Link className='text-[20px]  bg-sky-300 px-3 rounded-md hover:bg-blue-400' to={"/user/shizuka"}>Shizuka</Link>
       </div>
       
       <hr className='border-red-400 border-2 mt-5' />
       
       <Outlet />
    </div>
  )
}

export default User