import React from 'react'

import DoughnutChart from './DoughnutChart'

function SiteTraffic() {
  return (
    <div className='w-[350px] h-[355px] rounded-3xl bg-yellow-200 p-9 flex flex-col shadow-md gap-2'>
      <div className='flex justify-between items-baseline'>
        <p className='text-2xl font-bold'>Website traffic</p>
        <p className='text-sm align-bottom text-gray-500'>More</p>
      </div>
      <div className='flex justify-center'>
        <DoughnutChart />
      </div>
      <div className='flex flex-col-reverse h-full'>
        <div>
          <div className='flex justify-between mb-3'>
            <div className='flex items-center'>
              <div className='w-5 h-5 rounded-md bg-gray-950' />
              <p className='text-base font-semibold ml-2'>Social Media</p>
            </div>
            <p className='text-base font-semibold'>78%</p>
          </div>
          <hr className='w-full' />
          <div className='flex justify-between mt-3'>
            <div className='flex items-center'>
              <div className='w-5 h-5 rounded-md bg-gray-400' />
              <p className='text-base font-semibold ml-2'>Organic Search</p>
            </div>
            <p className='text-base font-semibold'>22%</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SiteTraffic
