import React from 'react'
import { CustomInput, DataTable } from '../components'

export interface PaymentContainerProps {}

export const PaymentContainer: React.FC<PaymentContainerProps> = () => {
  const columns = [
    'NO',
    'ASIGNED BY',
    'ADMIN MESSAGE',
    'STATUS',
    'PLAN',
    'AMOUNT',
    'CREATED AT',
  ]
  const data = [
    {
      NO: '1',
      'ASIGNED BY': 'Admin',
      'ADMIN MESSAGE': 'Transferred',
      STATUS: 'Doing',
      PLAN: 'Optional',
      AMOUNT: '1500',
      'CREATED AT': '2023-05-01',
    },
    {
      NO: '2',
      'ASIGNED BY': 'Admin',
      'ADMIN MESSAGE': 'Transferred',
      STATUS: 'Doing',
      PLAN: 'Optional',
      AMOUNT: '1500',
      'CREATED AT': '2023-05-01',
    },
    {
      NO: '3',
      'ASIGNED BY': 'Admin',
      'ADMIN MESSAGE': 'Transferred',
      STATUS: 'Doing',
      PLAN: 'Optional',
      AMOUNT: '1500',
      'CREATED AT': '2023-05-01',
    },
    {
      NO: '4',
      'ASIGNED BY': 'Admin',
      'ADMIN MESSAGE': 'Transferred',
      STATUS: 'Doing',
      PLAN: 'Optional',
      AMOUNT: '1500',
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
