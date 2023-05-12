import React from 'react'

type InputType = {
  type?: string
  required?: boolean
  width?: string
  height?: string
}

export function CustomInput({ type, required, width, height }: InputType) {
  return (
    <div className={`relative z-0 ${width ? width : 'w-full'} group flex`}>
      <input
        type={type ? type : 'text'}
        name='custom_input'
        id='custom_input'
        className={`block py-2.5 px-0 ${
          width ? width : 'w-full'
        } text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-yellow-200 peer`}
        placeholder=' '
        required={required}
      />
      <label
        htmlFor='custom_input'
        className='peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-yellow-200 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
      >
        Email address
      </label>
    </div>
  )
}
