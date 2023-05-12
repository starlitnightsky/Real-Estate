import React from 'react'
import { CustomInput } from './CustomInput'
import { FaTimes } from 'react-icons/fa'

type AbilityItemType = {
  id: number
  delAbility: (id: number) => void
}

export function AbilityItem({ id, delAbility }: AbilityItemType) {
  const delTicket = () => {
    delAbility(id)
  }
  return (
    <div className='flex gap-2 w-[50%]'>
      <CustomInput placeholder='Market' />
      <CustomInput placeholder='Place' />
      <CustomInput />
      <button
        onClick={delTicket}
        className='text-white hover:text-gray-400 active:text-gray-600'
      >
        <FaTimes className='w-[30px] h-[30px]' />
      </button>
    </div>
  )
}
