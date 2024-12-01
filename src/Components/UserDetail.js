// useParams => React mein useParams ek hook hai jo React Router dvara pradan kiya jata hai. Iska main use URL main maujood dynamic parameters ko access karne ke liye kiya jata hai. Single Page Applications (SPA) main navigation ke dauran dynamic data ko handle karne mai help karta hai. Uses - jab aap React Router ka use karte hai aur apke route main dynamic segments hote hai, ex - "/user/:id"  toh useParams ke jariye aap id ya any parameters ko access kar sakte hai. 

// useNavigate => React Router main useNavigate ek Hook hai jise navigation se related tasks ke liye use kiya jata hai. yah apko programmatically navigation, ex- URL change karne ki Facility deta hai bina kisi <Link> ya <NavLink> component ka use kiye. Main Use -  useNavigate ko tab use kiya jata hai jab apko user ko kisi or page par redirect karna ho ya URL ko update karna ho.

import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const UserDetail = () => {
    const {name} = useParams();
    const navigate = useNavigate();
    const handleClick = ()=>{
        navigate("/user"); // 1st code
     //  navigate(-1); // 2nd code
    }
    
  return (
    <div className='w-1/2 mt-3 ml-20'>
        <h1 className='text-blue-600 text-3xl'>User Detail</h1>
        <h1 className='text-green-600 text-2xl mt-3'>Hy {name}</h1>
        <button onClick={handleClick} className='px-2 py-1 mt-5 bg-red-500 rounded-md text-white'>Go Back</button>
    </div>
  )
}

export default UserDetail