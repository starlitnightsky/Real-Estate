import React from 'react'

import { FiArrowUpRight } from 'react-icons/fi'

function AgentsRegistered() {
  return (
    <div className='w-[350px] h-[355px] rounded-3xl bg-gray-200 p-7 flex flex-col shadow-md'>
      <div className='flex justify-between items-center'>
        <p className='text-lg font-semibold'>Total 35 Agents Registered</p>
        <div className='w-10 h-10 rounded-full bg-slate-800 hover:cursor-pointer hover:bg-slate-700 active:bg-slate-600 text-white text-center text-2xl p-2'>
          <FiArrowUpRight />
        </div>
      </div>
      <div className='flex gap-4 justify-center mt-8'>
        <div className='w-20 h-24 bg-none border-gray-500 border-2 rounded-xl p-2'>
          <p className='text-gray-500'>Mon</p>
          <p className='font-bold text-xl'>2</p>
        </div>
        <div className='w-20 h-24 bg-none bg-yellow-200 border-none border-yellow-200 rounded-xl p-2'>
          <p className='text-gray-500'>Tue</p>
          <p className='font-bold text-xl'>3</p>
        </div>
        <div className='w-20 h-24 bg-none border-gray-500 border-2 rounded-xl p-2'>
          <p className='text-gray-500'>Wed</p>
          <p className='font-bold text-xl'>4</p>
        </div>
      </div>
      <div className='flex flex-col-reverse h-full'>
        <div className='flex justify-between'>
          <p className='text-6xl font-semibold'>23%</p>
          <div className='border-l-2 border-gray-300'></div>
          <div className='flex flex-col items-start'>
            <p className='font-semibold'>-10%</p>
            <p className='text-lg text-gray-700'>Since last day</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AgentsRegistered
