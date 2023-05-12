import React from 'react'
import { CustomInput, DataTable } from '../components'

export interface LeadsContainerProps {}

export const LeadsContainer: React.FC<LeadsContainerProps> = () => {
  const columns = [
    'NO',
    'AGENT',
    'PHONE',
    'FROM',
    'EMAIL',
    'DESCRIPTION',
    'CREATED AT',
  ]
  const data = [
    {
      NO: '1',
      AGENT: 'Ronprz',
      PHONE: '1234567',
      EMAIL: 'danddycandy@gmail.com',
      FROM: 'Kope',
      DESCRIPTION: 'Detailed description...',
      'CREATED AT': '2023-05-01',
    },
    {
      NO: '2',
      AGENT: 'Ronprz',
      PHONE: '1234567',
      EMAIL: 'danddycandy@gmail.com',
      FROM: 'Kope',
      DESCRIPTION: 'Detailed description...',
      'CREATED AT': '2023-05-01',
    },
    {
      NO: '3',
      AGENT: 'Ronprz',
      PHONE: '1234567',
      EMAIL: 'danddycandy@gmail.com',
      FROM: 'Kope',
      DESCRIPTION: 'Detailed description...',
      'CREATED AT': '2023-05-01',
    },
    {
      NO: '4',
      AGENT: 'Ronprz',
      PHONE: '1234567',
      EMAIL: 'danddycandy@gmail.com',
      FROM: 'Kope',
      DESCRIPTION: 'Detailed description...',
      'CREATED AT': '2023-05-01',
    },
  ]
  return (
    <div className='flex flex-col'>
      <div className='flex flex-row-reverse m-[20px]'>
        <CustomInput width='w-[200px]' placeholder='Search...'></CustomInput>
      </div>
      <div>
        <DataTable columns={columns} data={data} />
      </div>
      <div className='text-white mt-[20px]'>Showing 1 to 4 of 0 entries</div>
    </div>
  )
}
