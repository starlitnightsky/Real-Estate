import React, { useState } from 'react'

import { CustomInput, ImageUpload, LocalityItem } from '../components'

export function AddPropertyContainer() {
  const [localityCount, setLocalityCount] = useState(0)
  const [localityState, setLocalityState] = useState([localityCount])

  const addLocality = () => {
    const tmp = [...localityState]
    setLocalityCount((abilityCount) => abilityCount + 1)
    tmp.push(localityCount + 1)
    setLocalityState(tmp)
  }

  const delLocality = (id: number) => {
    const tmp = [...localityState]
    const index = tmp.indexOf(id)
    tmp.splice(index, 1)
    setLocalityState(tmp)
  }

  return (
    <div className='flex flex-col gap-10 w-full px-[100px]'>
      <div className='grid grid-cols-4 gap-10'>
        <div className='flex flex-col gap-5'>
          <p className='text-xl text-white text-start'>Location</p>
          <CustomInput placeholder='Address' />
          <CustomInput placeholder='Locality' />
          <CustomInput placeholder='Street' />
          <CustomInput placeholder='State' />
          <CustomInput placeholder='City' />
          <CustomInput
            placeholder='Zip Code'
            type='number'
          />
        </div>
        <div className='flex flex-col gap-5'>
          <p className='text-xl text-white text-start'>Feature property</p>
          <CustomInput placeholder='Feature property' />
          <CustomInput placeholder='Property for' />
          <CustomInput placeholder='Property type' />
          <CustomInput
            placeholder='Price'
            type='number'
          />
          <CustomInput placeholder='Security deposit' />
          <CustomInput
            placeholder='Beds'
            type='number'
          />
        </div>
        <div className='flex flex-col gap-5'>
          <div className='mt-7'></div>
          <CustomInput
            placeholder='Baths'
            type='number'
          />
          <CustomInput
            placeholder='Kitchen size'
            type='number'
          />
          <CustomInput placeholder='Buildup area' />
          <CustomInput placeholder='Lease duration' />
          <CustomInput placeholder='Servent quaters' />
        </div>
        <div className='flex flex-col gap-5'>
          <div className='mt-7'></div>
          <CustomInput placeholder='Calling' />
          <CustomInput placeholder='Appliances' />
          <CustomInput
            placeholder='Floor size'
            type='number'
          />
          <CustomInput placeholder='Flooring type' />
          <CustomInput
            placeholder='Date available'
            type='date'
          />
          <CustomInput
            placeholder='Zip Code'
            type='number'
          />
        </div>
      </div>
      <div className='grid grid-cols-3 gap-10'>
        <div className='flex flex-col'>
          <p className='text-xl text-white text-start'>Property description</p>
          <CustomInput placeholder='Property desc' />
        </div>
        <div className='flex flex-col'>
          <p className='text-xl text-white text-start'>Property highlights</p>
          <CustomInput placeholder='Accomodation' />
          <CustomInput
            placeholder='Plot size'
            type='number'
          />
          <CustomInput placeholder='Your built' />
        </div>
        <div className='flex flex-col'>
          <div className='mt-7'></div>
          <CustomInput placeholder='Parking' />
          <CustomInput placeholder='Services' />
        </div>
      </div>
      <div className='flex flex-col gap-3'>
        <p className='text-xl font-semibold text-white text-start'>
          Upload Development Image
        </p>
        <ImageUpload
          multiple={true}
          text='Minimum 2 images'
        />
      </div>
      <div className='flex flex-col gap-5'>
        <p className='text-xl text-white text-start'>Near by locality</p>
        <button
          className='flex justify-center items-center w-[150px] h-[40px] text-gray-700 font-bold border-gray-400 border rounded-[10px] select-none cursor-pointer bg-yellow-200 hover:bg-amber-300 active:bg-amber-400'
          onClick={addLocality}
        >
          Add locality
        </button>
        <div className='px-3 flex flex-col gap-2'>
          {localityState.map((value, index) => {
            return (
              <LocalityItem
                key={`ability+${value}`}
                id={index}
                delLocality={delLocality}
              />
            )
          })}
        </div>
      </div>
      <button className='flex justify-center items-center h-[40px] text-gray-700 font-bold border-gray-400 border rounded-[10px] select-none cursor-pointer bg-yellow-200 hover:bg-amber-300 active:bg-amber-400'>
        S a v e
      </button>
    </div>
  )
}
