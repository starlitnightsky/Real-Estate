import React from 'react'
import { CustomInput, DataTable, PropertyCard } from '../components'

export interface PropertyContainerProps {}

export const PropertyContainer: React.FC<PropertyContainerProps> = () => {
  const columns = [
    'NO',
    'AGENT',
    'TYPE',
    'PRICE',
    'FEATURED',
    'POSTED ON',
    'ACTION',
  ]
  const data = [
    {
      NO: '1',
      AGENT: 'Admin',
      TYPE: 'Transferred',
      PRICE: '10',
      FEATURED: 'Yes',
      'POSTED ON': '2023/5/12',
      ACTION: '2023-05-01',
    },
    {
      NO: '2',
      AGENT: 'Admin',
      TYPE: 'Transferred',
      PRICE: '20',
      FEATURED: 'No',
      'POSTED ON': '2023/5/12',
      ACTION: '2023-05-01',
    },
    {
      NO: '3',
      AGENT: 'Admin',
      TYPE: 'Transferred',
      PRICE: '30',
      FEATURED: 'No',
      'POSTED ON': '2023/5/12',
      ACTION: '2023-05-01',
    },
    {
      NO: '4',
      AGENT: 'Admin',
      TYPE: 'Transferred',
      PRICE: '40',
      FEATURED: 'No',
      'POSTED ON': '2023/5/12',
      ACTION: '2023-05-01',
    },
  ]
  return (
    <div className='flex flex-col gap-3'>
      <p className='text-2xl text-white text-start'>
        Total Properties Listed : 500
      </p>
      <PropertyCard />
      <div className='flex flex-row-reverse mx-[20px]'>
        <CustomInput
          width='w-[200px]'
          placeholder='Search...'
        ></CustomInput>
      </div>
      <div>
        <DataTable
          columns={columns}
          data={data}
        />
      </div>
      <div className='text-white mt-[20px]'>Showing 1 to 4 of 0 entries</div>
    </div>
  )
}
