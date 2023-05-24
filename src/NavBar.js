import React from 'react'
import {Link }from "react-router-dom"
const NavBar = () => {
  return (
    <div>

        <Link to = "/" className='bg-black text-white mr-1 p-2 rounded-md'>Home</Link>
        <Link to = "/contact" className='bg-black text-white mr-1 p-2 rounded-md'>contact us</Link>
        <Link to = "/about" className='bg-black text-white mr-1 p-2 rounded-md'>About us</Link>

    </div>
  )
}

export default NavBar