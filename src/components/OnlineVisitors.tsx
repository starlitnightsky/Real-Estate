import React from 'react'

import LineChart from './LineChart'

function OnlineVisitors() {
  return (
    <div className='w-[350px] h-[355px] rounded-3xl bg-zinc-700 pt-9 flex flex-col shadow-md px-5 pb-3'>
      <div className='flex justify-between items-baseline'>
        <p className='text-xl text-white text-left'>Online Visitors</p>
        <p className='text-sm text-gray-400'>Details</p>
      </div>

      <div className='flex flex-col-reverse h-full'>
        <LineChart />
      </div>
    </div>
  )
}

export default OnlineVisitors
