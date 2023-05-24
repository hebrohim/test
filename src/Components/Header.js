import React from 'react'
import logo from "../assets/docket.png"
const Header = () => {
  return (
    <header className='flex items-center justify-between text-slate-900 mb-10'>
        <div className='flex items-center'>
       <div className='bg-sky-600 p-2 rounded-full'><img src={logo} style={{width:"1rem"}} className='shadow-sm shadow-white' /></div> 
        <h2 className='pl-2 text-lg'><span className='font-bold'>AceCoin</span>Pay</h2>
        </div>

        <div className='font-semibold'>
            <span className='bg-slate-900 text-white px-1 py-[0.13rem] rounded-[0.2rem] mr-[0.1rem]'>0</span>
            <span className='bg-slate-900 text-white px-1 py-[0.13rem] rounded-[0.2rem] mr-[0.1rem]'>1</span>
            <span className='mr-1'>:</span>
            <span className='bg-slate-900 text-white px-1 py-[0.13rem] rounded-[0.2rem] mr-[0.1rem]'>1</span>
            <span className='bg-slate-900 text-white px-1 py-[0.13rem] rounded-[0.2rem]'>9</span>

        </div>
    </header>
  )
}

export default Header