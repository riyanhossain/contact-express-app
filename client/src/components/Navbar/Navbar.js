import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <section className='bg-[#2825D1] w-screen flex flex-col justify-center items-center h-[4rem]'>
      <nav className='w-11/12'>
        <ul className='flex justify-between items-center'>
          <li className='p-4'>
            <label className='font-bold text-white font-tailfont'> ContactME </label>
          </li>
          <li className='flex items-center'>
            <input type="text" className='border-0 outline-0 text-center text-blue-900 font-tailfont font-semibold w-24 md:w-48 lg:w-64'/>
            <input type="button" value="Search" className='w-16 h-full bg-white text-blue-800 font-tailfont font-bold outline-0' />
          </li>
          <li className='flex'>
            <li className='p-4 text-white font-tailfont'>
              <Link to='/admin'> Admin </Link>
            </li>
            <li className='hidden p-4  text-white font-tailfont  md:block lg:block'>
              <Link to='/'> Home </Link>
            </li>
          </li>
        </ul>
      </nav>
    </section>
  )
}

export default Navbar