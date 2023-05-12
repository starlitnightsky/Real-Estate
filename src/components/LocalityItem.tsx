import React from 'react'
import { CustomInput } from './CustomInput'
import { FaTimes } from 'react-icons/fa'

type LocalityItemType = {
  id: number
  delLocality: (id: number) => void
}

export function LocalityItem({ id, delLocality }: LocalityItemType) {
  const delTicket = () => {
    delLocality(id)
  }
  return (
    <div className='flex gap-2 w-[50%]'>
      <CustomInput />
      <CustomInput placeholder='Name of place' />
      <CustomInput
        placeholder='Distance'
        type='number'
      />
      <button
        onClick={delTicket}
        className='text-white hover:text-gray-400 active:text-gray-600'
      >
        <FaTimes className='w-[30px] h-[30px]' />
      </button>
    </div>
  )
}
