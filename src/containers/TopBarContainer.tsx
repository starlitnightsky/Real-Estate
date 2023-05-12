import React from 'react'
import { AiOutlineBell, AiOutlineSearch } from 'react-icons/ai'
import { FiLogOut } from 'react-icons/fi'

export interface TopBarContainerProps {}

export const TopBarContainer: React.FC<TopBarContainerProps> = () => {
  return (
    <div className='flex flex-row justify-between w-[100%] h-[150px] items-center px-[100px]'>
      <div className='flex'>
        <h2 className='text-[rgba(255,255,255,0.8)] text-[30px]'>Statistics</h2>
      </div>
      <div className='flex justify-center items-center'>
        <AiOutlineSearch className='w-[20px] h-[20px] text-gray-300 mr-[10px]' />
        <input
          className='w-[200px] text-gray-300 p-[5px] border-none focus:border-none active:border-none border-gray-300 outline-none'
          placeholder='Search something...'
          style={{ backgroundColor: 'rgb(35, 35, 35)' }}
        />
      </div>
      <div className='flex'>
        <div className='flex w-[100px] h-[45px] justify-center text-gray-700 font-bold border-gray-400 border rounded-[10px] items-center select-none cursor-pointer bg-yellow-200 hover:bg-amber-300 active:bg-amber-400'>
          <p>Upgrade</p>
        </div>
        <div className='flex justify-center items-center border-gray-700 border-solid border-[1px] ml-[20px] p-[10px] rounded-[10px] hover:cursor-pointer hover:bg-gray-700 active:bg-gray-800'>
          <AiOutlineBell className='w-[20px] h-[20px] text-gray-300' />
        </div>
        <div className='flex justify-center items-center border-gray-700 border-solid border-[1px] ml-[20px] p-[10px] rounded-[10px] hover:cursor-pointer hover:bg-gray-700 active:bg-gray-800'>
          <FiLogOut className='w-[20px] h-[20px] text-gray-300' />
        </div>
      </div>
    </div>
  )
}
