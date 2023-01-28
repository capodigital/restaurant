import React from 'react'
import {
   
    RiSearch2Line, 
    
   } from "react-icons/ri";

const Header = () => {
  return (
    <header className=''>
            {/*title and search*/}
            <div className='flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6'>
              <div>
                <h1 className='text-2xl text-gray-300'>Los Nardos</h1>
                <p className='text-gray-500'>13 enero 2023</p>
              </div>
              <form action="">
                <div className='w-full relative'>
                  <RiSearch2Line className='absolute text-gray-300 left-3 top-1/2 -translate-y-1/2'/>
                  <input type="text" placeholder='search'
                  className='bg-[#1f1b28] rounded-lg text-gray-300
                  outline-none w-full py-2 pl-10 pr-4'/>
                </div>
                
              </form>
            </div>
            {/*tabs*/}
            <nav className='text-gray-300 flex items-center justify-between md:justify-start
            md:gap-8 border-b mb-6'>
              <a href="#" 
              className='relative py-2 pr-4 
              before:w-1/2 before:h-[1px] before:absolute before:bg-[#ec7c6a] before:left-0 
              before:rounded-full before:-bottom-[1px] text-[#ec7c6a]'>
                Hot dishes
              </a>
              <a href="#"
              className='py-2 pr-4'>
                Cold dishes
                </a>
              <a href="#"
              className='py-2 pr-4'>
                Soups
                </a>
              <a href="#" className='py-2'>
                Grill
                </a>
            </nav>
          </header>
  )
}

export default Header;