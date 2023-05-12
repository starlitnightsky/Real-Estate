import React from 'react'

function WebScore() {
  return (
    <div className='w-[350px] h-[355px] rounded-3xl bg-gray-200 p-7 flex flex-col shadow-md bg-[url(assets/img/fyer.png)] bg-no-repeat bg-cover'>
      <div className='flex flex-col-reverse h-full items-center'>
        <div className='bg-yellow-200 hover:cursor-pointer py-2 px-7 hover:bg-yellow-300 active:bg-yellow-400 rounded-2xl text-lg'>
          Web Score with AI
        </div>
      </div>
    </div>
  )
}

export default WebScore
