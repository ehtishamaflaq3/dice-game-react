import React from 'react'

const Totalscore = ({score}) => {
  return (
    <div className='flex items-center justify-center flex-col ml-60 mt-4 h-35 w-40'>
        <h1 className='text-5xl font-bold'>{score}</h1>
        <h2 className='text-3xl font-bold'>Total Score</h2>
        </div>
  )
}
export default Totalscore