import React from 'react'

const Navbar = () => {
  return (
    <div className='p-5 flex justify-between items-center'>
        <h1 className='font-adora text-5xl font-semibold'>8kra</h1>
        <ul className='hidden md:flex space-x-8'>
            <li className='hover:border-b border-orange-500'>Home</li>
            <li className='hover:border-b border-orange-500'>Places</li>
            <li className='hover:border-b border-orange-500'>Trips</li>
            <li className='hover:border-b border-orange-500'>About Us</li>
            <li className='hover:border-b border-orange-500'>Contact</li>
        </ul>
        <div className='flex items-center space-x-5'>
            <button className='px-5 py-2 rounded bg-gray-100'>Login</button>
            <button className='px-5 py-2 rounded bg-orange-500 text-white font-bold'>Sign up</button>
        </div>
    </div>
  )
}

export default Navbar