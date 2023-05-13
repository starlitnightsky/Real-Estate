import React from 'react'

type InputType = {
  required?: boolean
  width?: string
  height?: string
  placeholder?: string
  row: number
}

export function CustomTextarea({
  required,
  width,
  placeholder,
  row,
}: InputType) {
  return (
    <div className={`relative z-0 ${width ? width : 'w-full'} group flex`}>
      <textarea
        name='custom_input'
        id='custom_input'
        rows={row}
        className={`block py-2.5 px-0 ${
          width ? width : 'w-full'
        } text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-yellow-200 peer scroll1`}
        placeholder=' '
        required={required}
      />
      <label
        htmlFor='custom_input'
        className='peer-focus:font-medium absolute text-[15px] text-gray-500 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-yellow-200 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8'
      >
        {placeholder}
      </label>
    </div>
  )
}
