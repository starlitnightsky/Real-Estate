import React from 'react'
import { DataTable } from '../components'

export interface PaymentContainerProps {}

export const PaymentContainer: React.FC<PaymentContainerProps> = () => {
  const columns = [
    'ID',
    'ASIGNED BY',
    'ADMIN MESSAGE',
    'STATUS',
    'PLAN',
    'AMOUNT',
    'CREATED AT',
    'COUNT1',
    'COUNT2',
    'Extra Info',
  ]
  return (
    <div className='px-[100px]'>
      <DataTable columns={columns} />
    </div>
  )
}
