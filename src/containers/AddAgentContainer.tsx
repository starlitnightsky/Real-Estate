import React from 'react'

import { CustomInput, ImageUpload } from '../components'

export function AddAgentContainer() {
  return (
    <div className='grid grid-cols-3 p-3 gap-10 pt-24 px-[100px]'>
      <div className='h-[280px]'>
        <ImageUpload
          multiple={false}
          text='Agent Image'
        />
      </div>
      <div className='flex flex-col gap-10'>
        <div className='flex gap-5'>
          <CustomInput placeholder='First name' />
          <CustomInput placeholder='Last name' />
        </div>
        <CustomInput placeholder='Address' />
        <CustomInput
          type='number'
          placeholder='Contact No.'
        />
        <CustomInput
          type='email'
          placeholder='Email'
        />
        <CustomInput
          type='password'
          placeholder='Password'
        />
        <CustomInput
          type='password'
          placeholder='Confirm Password'
        />
      </div>
      <div className='flex flex-col gap-10'>
        <p className='text-xl text-white text-start pt-4'>
          Personal Information
        </p>
        <CustomInput placeholder='Desgination' />
        <CustomInput placeholder='Experience' />
        <CustomInput
          placeholder='Sales'
          type='number'
        />
        <CustomInput placeholder='Specialities' />
        <CustomInput placeholder='About you' />
      </div>
      <div></div>
      <button className='col-span-2 flex justify-center items-center h-[50px] text-gray-700 font-bold border-gray-400 border rounded-[10px] select-none cursor-pointer bg-yellow-200 hover:bg-amber-300 active:bg-amber-400'>
        Add Agent
      </button>
    </div>
  )
}
