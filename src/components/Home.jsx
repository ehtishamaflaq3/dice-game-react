import React from 'react'
import dices1 from '../images/dices 1.jpg'
const Home = ({toggle}) => {
  return (
    <div className='bg-white gap-20 flex items-center w-full h-193'>
  <img className='ml-40 shadow-2xl h-174' src={dices1} alt="error" />
  <div className='flex flex-col gap-10 '>
  <h1 className='text-8xl font-bold shadow-2xl '>DICE GAME</h1>
  <button onClick={toggle} className='bg-black hover:bg-white hover:text-black hover:border-2 cursor-pointer active:bg-white active:text-black ml-60 text-3xl shadow-2xl h-20 w-70 text-white'>PLAY NOW</button>
  </div>
    </div>
  )
}
export default Home