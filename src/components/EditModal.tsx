import React from 'react'

// import { CustomInput } from './CustomInput'
import { FaTimes } from 'react-icons/fa'
import { CustomInput } from './CustomInput'
import { CustomSelect } from './CustomSelect'

type ModalType = {
  hidden: boolean
  close: () => void
}

export function EditModal({ hidden, close }: ModalType) {
  const closeModal = () => {
    close()
  }
  const apply = () => {
    close()
  }
  return (
    <div
      id='staticModal'
      data-modal-backdrop='static'
      tabIndex={-1}
      aria-hidden={hidden}
      className={`fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full ${
        hidden ? 'hidden' : 'block'
      } bg-[rgba(10,10,10,0.7)]`}
    >
      <div className='relative w-full max-w-2xl max-h-full mt-40 inline-block'>
        {/* <!-- Modal content --> */}
        <div className='relative bg-zinc-800 rounded-lg shadow-lg'>
          {/* <!-- Modal header --> */}
          <div className='flex items-start justify-between p-4 border-b rounded-t'>
            <h3 className='text-2xl font-semibold text-white'>Edit</h3>
            <button
              className='text-white hover:text-gray-400 active:text-gray-600'
              onClick={closeModal}
            >
              <FaTimes className='w-[20px] h-[20px]' />
            </button>
          </div>
          {/* <!-- Modal body --> */}
          <div className='grid grid-cols-2 gap-10 px-[50px] py-[50px]'>
            <div className='flex flex-col gap-5'>
              <p className='text-xl text-white text-start'>Change status</p>
              <CustomSelect />
            </div>
            <div></div>
            <div className=' col-span-2'>
              <CustomInput placeholder='message' />
            </div>
          </div>
          {/* <!-- Modal footer --> */}
          <div className='flex justify-end px-6 py-4 space-x-2 border-t rounded-b'>
            <button
              className='flex justify-center items-center w-[150px] h-[40px] text-gray-700 font-bold border-gray-400 border rounded-[10px] select-none cursor-pointer bg-yellow-200 hover:bg-amber-300 active:bg-amber-400'
              onClick={apply}
            >
              Apply
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
