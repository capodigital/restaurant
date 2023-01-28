import React from 'react';
import { useState } from 'react';
import Sidebar from "./components/shared/Sidebar";
import {
   RiMenu3Fill, 
   RiUserLine, 
   RiAddLine, 
   RiPieChartLine, 
   RiCloseLine, 
   RiArrowDownLine,
  } from "react-icons/ri";
import Car from './components/shared/Car';
import Card from './components/shared/Card';
import Header from './components/shared/Header';

function App() {
  
  const [showMenu, setShowMenu] = useState(false);
  const [showOrder, setShowOrder] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
    setShowOrder(false);
    
  }
  const toggleOrder = () => {
    setShowOrder(!showOrder);
    setShowMenu(false);
  }
  return (
  
    <div className="bg-[#262837] w-full min-h-screen">
      <Sidebar showMenu = {showMenu}/>
      <Car showOrder = {showOrder} setShowOrder = {setShowOrder} />
      {/*menu movil*/}
      <nav className='lg:hidden bg-[#1f1b28] fixed w-full bottom-0 left-0 text-2xl text-gray-400
      py-2 px-8 flex items-center justify-between rounded-tl-xl rounded-tr-xl'>
      <button className='p-2'>
        <RiUserLine />
      </button>
      <button className='p-2'>
        <RiAddLine />
      </button>
      <button onClick={toggleOrder} className='p-2'>
        <RiPieChartLine />
      </button>
      <button onClick={toggleMenu} className='text-white p-2'>
        {showMenu ?  <RiCloseLine /> : <RiMenu3Fill />}
      </button>
      </nav> 

      <main className='lg:pl-32 lg:pr-96 p pb-20'>
        <div className='md:p-8 p-4'>
          {/*header*/}
          <Header />
          {/*title content*/}
          <div className='flex items-center justify-between mb-16'>
              <h2 className='text-xl text-gray-300'>Choose dishes</h2>
              <button className='flex items-center gap-4 text-gray-300 bg-[#1f1b28] py-2 px-4 rounded-lg'>
                <RiArrowDownLine />Dine in
              </button>
          </div>
          {/*content*/}
          <div className='p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16'>
            {/*card*/}
            <Card 
            img="comida.png"
            description="Speacy seasoned seafood noodles" 
            price="2.29" 
            inventary="20" />
            {/*card*/}
            <Card 
            img="comida.png"
            description="Speacy seasoned seafood noodles" 
            price="2.29" 
            inventary="20" />
            {/*card*/}
            <Card 
            img="comida.png"
            description="Speacy seasoned seafood noodles" 
            price="2.29" 
            inventary="20" />
            {/*card*/}
            <Card 
            img="comida.png"
            description="Speacy seasoned seafood noodles" 
            price="2.29" 
            inventary="20" />
            {/*card*/}
            <Card 
            img="comida.png"
            description="Speacy seasoned seafood noodles" 
            price="2.29" 
            inventary="20" />
            {/*card*/}
            <Card 
            img="comida.png"
            description="Speacy seasoned seafood noodles" 
            price="2.29" 
            inventary="20" />
            {/*card*/}
            <Card 
            img="comida.png"
            description="Speacy seasoned seafood noodles" 
            price="2.29" 
            inventary="20" />
            
          </div>
            

        </div>
        

      </main>
    </div>
  );
}

export default App;
