import React, { useState } from 'react'
import zxcvbn from 'zxcvbn'
import ProgressBar from 'react-bootstrap/ProgressBar'

type InputType = {
  type?: string
  required?: boolean
  width?: string
  height?: string
  placeholder?: string
  value?: string
}

export function CustomInput({
  type,
  required,
  width,
  height,
  placeholder,
  value,
}: InputType) {
  const [text, setText] = useState(value)
  const [passwordScore, setPasswordScore] = useState(0)

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
    setPasswordScore(zxcvbn(e.target.value).score)
  }
  const getProgressBarVariant = (now: number) => {
    if (now < 25) {
      return 'danger'
    } else if (now < 50) {
      return 'warning'
    } else if (now < 75) {
      return 'info'
    } else {
      return 'success'
    }
  }
  return (
    <div className='flex flex-col'>
      <div className={`relative z-0 ${width ? width : 'w-full'} group flex`}>
        <input
          type={type ? type : 'text'}
          name='custom_input'
          id='custom_input'
          className={`block py-2.5 px-0 ${
            width ? width : 'w-full'
          } text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-yellow-200 peer`}
          placeholder=' '
          value={text}
          onChange={handlePasswordChange}
          required={required}
        />
        <label
          htmlFor='custom_input'
          className='peer-focus:font-medium absolute text-[15px] text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-yellow-200 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
        >
          {placeholder}
        </label>
      </div>
      {type === 'password' && passwordScore > 0 && (
        <div className='mt-[5px]'>
          <ProgressBar
            now={passwordScore * 25}
            variant={getProgressBarVariant(passwordScore * 25)}
            className='bg-gray-400 text-gray-200'
          />
        </div>
      )}
    </div>
  )
}
