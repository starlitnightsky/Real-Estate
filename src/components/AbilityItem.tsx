import React from 'react'
import { CustomInput } from './CustomInput'

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
        className='flex justify-center items-center text-gray-700 font-bold border-gray-400 border rounded-[10px] select-none cursor-pointer bg-yellow-200 hover:bg-yellow-300 active:bg-yellow-400'
        onClick={delTicket}
      >
        close
      </button>
    </div>
  )
}
