import React from 'react'
import Select from 'react-select'

const features = [
  'Balcony',
  'Pool',
  'Built-in wardrobes',
  'Gym',
  'Equipped kitchen',
  'Walk-in closet',
  'Spa',
  'Covered Parking',
  'Study room',
  'Private pool',
  'Garden',
  'Security',
  'Concierge',
  'Maid service',
  'Jacuzzi',
  'Others',
]

export interface MultiSelectProps {}

export const MultiFeatureSelect: React.FC<MultiSelectProps> = () => {
  const allOptions: { value: number; label: string }[] = []
  features.map((val, ind) => allOptions.push({ value: ind, label: val }))
  const selectStyles = {
    control: (base: any) => ({
      ...base,
      fontSize: '16px',
      backgroundColor: 'transparent',
      border: 'none',
      boxShadow: 'none',
      color: 'white',
      borderBottom: 'solid white',
      borderBottomWidth: '2px',
      '&:focus': {
        border: '0 !important',
      },
    }),
    multiValue: (base: any) => ({
      ...base,
      backgroundColor: 'grey',
      color: 'white',
      fontColor: 'white',
    }),
  }

  return (
    <div className='flex flex-wrap items-center justify-center w-full mt-[3px]'>
      <div className=' px-2	w-full'>
        <Select
          isMulti
          options={allOptions}
          styles={selectStyles}
          placeholder='Features here...'
        />
      </div>
    </div>
  )
}
