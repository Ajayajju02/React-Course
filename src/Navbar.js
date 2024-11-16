import React from 'react'

function Navbar() {
  return (
    <div className='w-full px-20 py-5 flex justify-between items-center'>
        <h3 className='font-semibold text-[18px]'>Orange</h3>
        <div className='flex px-3 py-2 bg-orange-600 text-white rounded-md gap-3'>
            <h3>Favourites</h3>
            <h3>2</h3>
        </div>
    </div>
  )
}

export default Navbar