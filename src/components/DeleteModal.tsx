import React from 'react'

type ModalType = {
  hidden: boolean
  close: () => void
}

export function DeleteModal({ hidden, close }: ModalType) {
  const ok = () => {
    close()
  }
  const cancel = () => {
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
          {/* <!-- Modal body --> */}
          <div className='flex flex-col gap-10 items-center px-[100px] py-[70px]'>
            <p className=' text-6xl text-white'>Are you sure?</p>
            <div className='flex flex-row gap-10'>
              <button
                className='flex justify-center items-center w-[150px] h-[40px] text-gray-700 font-bold border-gray-400 border rounded-[10px] select-none cursor-pointer bg-yellow-200 hover:bg-amber-300 active:bg-amber-400'
                onClick={ok}
              >
                O K
              </button>
              <button
                className='flex justify-center items-center w-[150px] h-[40px] text-gray-200 font-bold border-none rounded-[10px] select-none cursor-pointer bg-rose-600 hover:bg-rose-700 active:bg-rose-800'
                onClick={cancel}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
