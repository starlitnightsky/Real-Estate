import React, { useState } from 'react'

import { ImageUpload, CustomInput, AbilityItem } from '../components'

export function DevelopmentContainer() {
  const [abilityCount, setAbilityCount] = useState(0)
  const [abilityState, setAbilityState] = useState([abilityCount])

  const addAbility = () => {
    const tmp = [...abilityState]
    setAbilityCount((abilityCount) => abilityCount + 1)
    tmp.push(abilityCount + 1)
    setAbilityState(tmp)
  }

  const delAbility = (id: number) => {
    const tmp = [...abilityState]
    const index = tmp.indexOf(id)
    tmp.splice(index, 1)
    setAbilityState(tmp)
  }

  return (
    <div className='flex flex-col w-full px-[100px] gap-4'>
      <div className='grid grid-cols-4 gap-3'>
        <div className='flex flex-col gap-3 p-3'>
          <CustomInput placeholder='Development name' />
          <div className='h-[280px]'>
            <ImageUpload
              multiple={false}
              text='Banner Image'
            />
          </div>
        </div>

        <div className='flex flex-col justify-between p-3'>
          <CustomInput placeholder='Area' />
          <CustomInput
            placeholder='Zip code'
            type='number'
          />
          <CustomInput placeholder='Description' />
          <CustomInput placeholder='Property type' />
        </div>

        <div className='flex flex-col justify-between p-3'>
          <CustomInput placeholder='Building type' />
          <CustomInput
            placeholder=' Copletion date'
            type='date'
          />
          <CustomInput placeholder='Units' />
          <CustomInput placeholder='Floors' />
        </div>

        <div className='flex flex-col justify-between p-3'>
          <CustomInput placeholder='Area/City' />
          <CustomInput placeholder='Developer name' />
          <CustomInput placeholder='Architect name' />
          <CustomInput placeholder='Website' />
        </div>
      </div>
      <div className='flex flex-col gap-3'>
        <p className='text-xl font-semibold text-white text-start'>
          Upload Development Image
        </p>
        <ImageUpload
          multiple={true}
          text='Minimum 2 images'
        />
      </div>
      <button
        className='flex justify-center items-center w-[150px] h-[40px] text-gray-700 font-bold border-gray-400 border rounded-[10px] select-none cursor-pointer bg-yellow-200 hover:bg-amber-300 active:bg-amber-400'
        onClick={addAbility}
      >
        Add ability
      </button>
      <div className='p-3 flex flex-col gap-2'>
        {abilityState.map((value, index) => {
          return (
            <AbilityItem
              key={`ability+${value}`}
              id={index}
              delAbility={delAbility}
            />
          )
        })}
      </div>
      <button className='flex justify-center items-center h-[40px] text-gray-700 font-bold border-gray-400 border rounded-[10px] select-none cursor-pointer bg-yellow-200 hover:bg-amber-300 active:bg-amber-400'>
        S a v e
      </button>
    </div>
  )
}
