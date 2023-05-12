import React from 'react'
import { FaFileDownload } from 'react-icons/fa'

function Report() {
  return (
    <div className='w-[350px] h-[355px] rounded-3xl bg-zinc-700 p-9 flex flex-col shadow-md'>
      <div className='flex justify-between items-center'>
        <div className='text-white bg-zinc-700 text-lg rounded-full px-7 py-2 border-gray-500 border-2 hover:cursor-pointer hover:bg-zinc-600 active:bg-zinc-500'>
          Full Report
        </div>
        <p className='text-xl text-yellow-200'>/ 2023</p>
      </div>
      <div className='flex flex-col-reverse h-full'>
        <div className='flex items-stretch hover:cursor-pointer bg-zinc-700 hover:bg-zinc-600 active:bg-zinc-500 rounded-xl text-white border-gray-500'>
          <div className='rounded-s-xl p-4 border-gray-500 border-2 flex-grow'>
            Download Report
          </div>
          <div className='rounded-e-xl p-4 border-gray-500 border-2 border-l-0 text-xl'>
            <FaFileDownload />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Report
