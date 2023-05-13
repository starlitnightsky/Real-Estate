import React, { useState, useEffect } from 'react'

import {
  CustomInput,
  ImageUpload,
  LocalityItem,
  CustomSelect,
  CustomTextarea,
  MultiFeatureSelect,
} from '../components'

export function AddPropertyContainer() {
  const [localityCount, setLocalityCount] = useState(0)
  const [localityState, setLocalityState] = useState([localityCount])

  const [hiddenProperty, setHiddenProperty] = useState(true)
  const [hiddenDateAvailability, setHiddenAvailability] = useState(true)
  const [hiddenLifestyle, setHiddenLifestyle] = useState(true)
  const [checkedFeature, setCheckedFeature] = useState(true)
  const [hiddenFeature, setHiddenFeature] = useState(true)
  const [referenceNumber, setReferenceNumber] = useState('634587349')

  useEffect(() => {
    setReferenceNumber('482957396')
    setHiddenFeature(true)
    setCheckedFeature(true)
  }, [])
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
    <div className='flex flex-col gap-10 w-full'>
      <div className='grid grid-cols-3 gap-10'>
        <div className='flex flex-col gap-4'>
          <div className='w-full'>
            <p className=' text-xs text-gray-400 text-start p-0'>
              Property Type
            </p>
            <CustomSelect
              optionText={[
                'Villas',
                'Penthouse',
                'Apartments',
                'Townhouse',
                'Plot',
                'Loft & Duplex',
                'Office',
              ]}
              showProperty={() => setHiddenProperty(false)}
              hideProperty={() => setHiddenProperty(true)}
            />
          </div>
          {!hiddenProperty && (
            <div className='flex flex-col gap-5'>
              <CustomInput
                placeholder='Number of Floors'
                type='number'
              />
              <CustomInput
                placeholder='Year Built-In'
                type='date'
              />
            </div>
          )}
          <div className='w-full'>
            <p className=' text-xs text-gray-400 text-start p-0'>
              Property Availablitity
            </p>
            <CustomSelect
              optionText={['Ready', 'Offplan']}
              showDateAvailability={() => setHiddenAvailability(false)}
              hideDateAvailability={() => setHiddenAvailability(true)}
            />
          </div>
          {!hiddenDateAvailability && (
            <CustomInput
              placeholder='Date of availability'
              type='date'
            />
          )}
          <div>
            <p className=' text-xs text-gray-400 text-start p-0'>Lifestyle</p>
            <CustomSelect
              optionText={[
                'Beachfront',
                'Downtown Living',
                'Golf Estates',
                'Luxury penthouses',
                'Sea Facing Properties',
                'Waterfront Properties',
                'Resedential Communities',
                'Others',
              ]}
              showLifestyle={() => setHiddenLifestyle(false)}
              hideLifestyle={() => setHiddenLifestyle(true)}
            />
          </div>
          {!hiddenLifestyle && (
            <CustomInput placeholder='Input your own lifestyle' />
          )}

          <div className='flex'>
            <CustomInput
              placeholder='Price'
              type='number'
            />
            <div className='w-[130px]'>
              <CustomSelect
                optionText={['AED', 'USD', 'EUR', 'JPY', 'GBP', 'CAD']}
              />
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-4 mt-[10px]'>
          <CustomInput
            placeholder='Bedrooms'
            type='number'
          />
          <CustomInput
            placeholder='Bathrooms'
            type='number'
          />
          <CustomInput placeholder='SQ.FT' />
          <CustomInput placeholder='Plot Size' />
          <div className='flex flex-col'>
            <CustomTextarea
              row={6}
              placeholder='Description of Property'
            />
          </div>
          <CustomInput placeholder='Developer' />
          <CustomInput placeholder='Building Name' />
        </div>
        <div className='flex flex-col gap-5 mt-[10px]'>
          <div className='flex flex-col gap-4'>
            <CustomInput
              placeholder='RERA Number'
              type='number'
            />
            <CustomInput placeholder='Location' />
            <CustomInput placeholder='Area' />
          </div>
          <div className='flex flex-col mt-5'>
            <div className='flex items-center'>
              <input
                id='default-checkbox'
                type='checkbox'
                checked={checkedFeature}
                className='w-4 h-4 text-blue-500 bg-white border-0 rounded focus:ring-blue-500 focus:ring-2 hover:cursor-pointer'
                onChange={() => setCheckedFeature(!checkedFeature)}
              />
              <label
                htmlFor='default-checkbox'
                className='ml-2 text-lg text-white hover:cursor-pointer'
              >
                Featured Listing
              </label>
            </div>
            {checkedFeature && (
              <div className='flex flex-col gap-2'>
                <MultiFeatureSelect />
                {!hiddenFeature && (
                  <CustomInput placeholder='Input your own feature' />
                )}
              </div>
            )}
          </div>
          <div className='flex flex-col-reverse h-full'>
            <div className='flex flex-col gap-4'>
              <CustomInput
                placeholder='Reference Number'
                type='number'
                value={referenceNumber}
              />
              <CustomInput placeholder='Youtube Link' />
            </div>
          </div>
        </div>
      </div>

      <div className='flex flex-col gap-3'>
        <p className='text-xl font-semibold text-white text-start'>
          Upload Development Image
        </p>
        <ImageUpload
          multiple={true}
          text='Minimum 3 images, Maximum 10 images'
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
