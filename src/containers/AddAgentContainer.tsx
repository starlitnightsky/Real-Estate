import React from 'react'

import { CustomInput, ImageUpload } from '../components'

export function AddAgentContainer() {
  return (
    <div className='grid grid-cols-3 p-3 gap-10 pt-16 justify-items-center'>
      <div className='h-[280px] w-[280px]'>
        <ImageUpload
          multiple={false}
          text='Agent Image'
        />
      </div>
      <div className='flex flex-col gap-10 w-full'>
        <div className='mt-7'></div>
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
      <div className='flex flex-col gap-10 w-full'>
        <p className='text-xl text-white text-start'>Personal Information</p>
        <CustomInput placeholder='Desgination' />
        <div className='flex'>
          <CustomInput placeholder='Experience' />
          <select
            id='underline_select'
            className='block py-2.5 px-0 w-[130px] text-lg bg-transparent border-0 border-b-2 appearance-none text-gray-300 border-gray-200 focus:outline-none focus:ring-0 focus:border-gray-200 peer'
          >
            <option
              value='years'
              className='bg-zinc-800 text-gray-300 border-none'
            >
              Years
            </option>
            <option
              value='months'
              className='bg-zinc-800 text-gray-300 border-none'
            >
              Months
            </option>
          </select>
        </div>
        <CustomInput
          placeholder='RERA License No'
          type='number'
        />
        <CustomInput placeholder='Language Skills' />

        <CustomInput
          placeholder='Whatsapp Contact Number'
          type='number'
        />
        <CustomInput placeholder='About you' />
      </div>
      <div></div>
      <button className='w-full col-span-2 flex justify-center items-center h-[50px] text-gray-700 font-bold border-gray-400 border rounded-[10px] select-none cursor-pointer bg-yellow-200 hover:bg-amber-300 active:bg-amber-400'>
        Add Agent
      </button>
    </div>
  )
}
