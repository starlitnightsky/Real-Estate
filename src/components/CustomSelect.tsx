import React from 'react'

export function CustomSelect() {
  return (
    <div>
      <label
        htmlFor='underline_select'
        className='sr-only'
      >
        Underline select
      </label>
      <select
        id='underline_select'
        className='block py-2.5 px-0 w-full text-xl bg-transparent border-0 border-b-2 appearance-none text-gray-300 border-gray-200 focus:outline-none focus:ring-0 focus:border-gray-200 peer'
      >
        <option
          value='active'
          className='bg-zinc-800 text-gray-300 border-none'
        >
          Active
        </option>
        <option
          value='hold'
          className='bg-zinc-800 text-gray-300 border-none'
        >
          On Hold
        </option>
        <option
          value='close'
          className='bg-zinc-800 text-gray-300 border-none'
        >
          Close
        </option>
      </select>
    </div>
  )
}
