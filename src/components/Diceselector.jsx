import React from 'react'
import { useState } from 'react'

const Diceselector = ({error,setError,selectedNumber,setselectedNumber}) => {
  const arrayNumber=[1,2,3,4,5,6]
  const errorhandler = (number) => {
    setselectedNumber(number);
    setError("");
  };
  return (
    <div className='flex flex-col items-center mr-25 mt-15  h-50 w-210'>
      <p className='text-2xl pl-90'>{error}</p>
      <div className='flex gap-5 items-center h-50 w-200'>
      {arrayNumber.map((value, i) => (
        <h1
          className='border-2 cursor-pointer h-30 w-35 flex items-center text-4xl justify-center'
          onClick={() => errorhandler(value)}
          key={i}
        >
          {value}
        </h1>
      ))}
      </div>
      <div className=' h-10 pl-146 w-200 items-center flex justify-center  '>
        <h1 className='text-3xl font-bold '>
          {selectedNumber == null ? "Select One" : selectedNumber}
        </h1>
      </div>
    </div>
  )
}
export default Diceselector