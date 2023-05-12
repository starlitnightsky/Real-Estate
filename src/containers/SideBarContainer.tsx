import React from 'react'
import avatar from '../assets/img/avatar_15.jpg'
import { MenuItem } from '../components/MenuItem'

export interface SideBarContainerProps {
  setNavigation: (val: string) => void
}

export const SideBarContainer: React.FC<SideBarContainerProps> = ({
  setNavigation,
}) => {
  return (
    <div className='flex w-[400px] h-[100vh] border-r-2 border-r-[rgba(203,213,225,0.1)] pt-[50px] pb-[50px] flex-col'>
      <div className='flex flex-row justify-center items-center gap-3'>
        <h1 className='text-[rgba(255,255,255,0.8)] text-4xl mt-2'>
          D E L A T T I O
        </h1>
      </div>
      <div className='flex flex-col mt-[50px] items-center'>
        <img
          src={avatar}
          alt='user'
          className='w-[90px] h-[90px] rounded-full'
        />
        <h2 className='mt-[10px] text-[rgba(255,255,255,0.8)] text-xl'>
          Louis Carter
        </h2>
        <div className='w-[80px] h-[30px] mt-3 text-gray-200 border-gray-400 border rounded-[20px] items-center pt-0.5 select-none cursor-pointer hover:bg-gray-500 active:bg-gray-600'>
          Edit
        </div>
      </div>
      <div className='h-[435px] flex flex-col overflow-y-auto scroll1 items-center my-[40px] ml-5 mr-2.5'>
        <div className='flex flex-col '>
          <MenuItem
            title='Dashboard'
            type='dashboard'
            setNavigation={setNavigation}
          />
          <MenuItem
            title='Development'
            type='development'
            setNavigation={setNavigation}
          />
          <MenuItem
            title='Payment'
            type='payment'
            setNavigation={setNavigation}
          />
          <MenuItem
            title='My Leads'
            type='leads'
            setNavigation={setNavigation}
          />
          <MenuItem
            title='Add agent'
            type='agent'
            setNavigation={setNavigation}
          />
          <MenuItem
            title='Agent listing'
            type='agentlist'
            setNavigation={setNavigation}
          />
          <MenuItem
            title='Property'
            type='property'
            setNavigation={setNavigation}
          />
          <MenuItem
            title='Add property'
            type='propertyadd'
            setNavigation={setNavigation}
          />
          <MenuItem
            title='List development'
            type='developmentlist'
            setNavigation={setNavigation}
          />
          <MenuItem
            title='Journals'
            type='journals'
            setNavigation={setNavigation}
          />
          <MenuItem
            title='Articles'
            type='articles'
            setNavigation={setNavigation}
          />
          <MenuItem
            title='Upload Images'
            type='uploadimages'
            setNavigation={setNavigation}
          />
        </div>
      </div>
      <div className='flex flex-row items-center justify-center self-center'>
        <h1 className='text-gray-600 text-[15px] font-bold mr-[15px]'>Light</h1>
        <div className='flex items-center justify-centermb-12'>
          <label htmlFor='toggleB' className='flex items-center cursor-pointer'>
            <div className='relative'>
              <input
                type='checkbox'
                id='toggleB'
                className='sr-only'
                defaultChecked={true}
              />
              <div className='flex border border-gray-400 border-rounded-[20px] w-[70px] h-8 rounded-full items-center p-[3px] justify-between'>
                <span className=''>
                  <svg
                    className='h-6 w-6 text-gray-300 fill-gray-300'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z'
                    />
                  </svg>
                </span>
                <span className=''>
                  <svg
                    className='h-6 w-6 text-gray-700 fill-gray-700'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z'
                    />
                  </svg>
                </span>
              </div>
              <div className='dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition'></div>
            </div>
          </label>
        </div>
        <h1 className='text-gray-300 text-[15px] font-bold ml-[15px]'>Dark</h1>
      </div>
    </div>
  )
}
