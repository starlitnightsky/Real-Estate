import React from 'react'

import { ImageUpload, CustomInput } from '../components'

export function DevelopmentContainer() {
  return (
    <div className='flex flex-col w-full pl-5 gap-3'>
      <div className='grid grid-cols-4 gap-3'>
        <div className='flex flex-col gap-3 p-3'>
          <CustomInput placeholder='Development name' />
          <div className='h-[280px]'>
            <ImageUpload multiple={false} />
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
        <ImageUpload multiple={true} />
      </div>
      <button className='flex justify-center items-center h-[40px] text-gray-700 font-bold border-gray-400 border rounded-[10px] select-none cursor-pointer bg-yellow-200 hover:bg-yellow-300 active:bg-yellow-400'>
        S a v e
      </button>
    </div>
  )
}
