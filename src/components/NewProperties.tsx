import React from 'react'
import { RiBarChartFill } from 'react-icons/ri'

import BarChart from './BarChart'

function NewProperties() {
  return (
    <div className='w-[350px] h-[355px] rounded-3xl bg-zinc-700 p-9 flex flex-col shadow-md gap-3'>
      <div className='flex'>
        <div className='w-8 h-8 rounded-md bg-zinc-600 mr-2 text-yellow-200 text-2xl p-1'>
          <RiBarChartFill />
        </div>
        <p className='text-xl text-white'>New Properties</p>
      </div>
      <p className='text-white text-4xl text-left'>283</p>
      <div className='flex flex-col-reverse h-full'>
        <BarChart />
      </div>
    </div>
  )
}

export default NewProperties
