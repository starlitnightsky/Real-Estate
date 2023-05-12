import React from 'react'
import { CustomInput, DataTable } from '../components'

export interface AgentListContainerProps {}

export const AgentListContainer: React.FC<AgentListContainerProps> = () => {
  const columns = [
    'NO',
    'AUTHENTICATED',
    'FIRSTNAME',
    'EMAIL',
    'USERTYPE',
    'USERNAME',
    'CREATED AT',
    'ACTION',
  ]
  const data = [
    {
      NO: '1',
      AUTHENTICATED: 'Active',
      FIRSTNAME: 'Ronprz',
      EMAIL: 'danddycandy@gmail.com',
      USERTYPE: 'administrator',
      USERNAME: 'Rony',
      'CREATED AT': '2023-05-01',
      ACTION: 'DELETE',
    },
    {
      NO: '2',
      AUTHENTICATED: 'Active',
      FIRSTNAME: 'Ronprz',
      EMAIL: 'danddycandy@gmail.com',
      USERTYPE: 'administrator',
      USERNAME: 'Rony',
      'CREATED AT': '2023-05-01',
      ACTION: 'DELETE',
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
      <div className='text-white mt-[20px]'>Showing 1 to 2 of 0 entries</div>
    </div>
  )
}
