import React, { useState } from 'react'
import { AiFillEdit, AiFillDelete } from 'react-icons/ai'

import { EditModal } from './EditModal'

export interface DataTableProps {
  columns: string[]
  data: any
}

export const DataTable: React.FC<DataTableProps> = ({ columns, data }) => {
  const [hidden, setHidden] = useState(true)
  return (
    <div className='shadow overflow-hidden sm:rounded-lg'>
      <table className='min-w-full text-sm text-white'>
        <thead className='bg-[rgb(33,35,37)] text-xs uppercase font-medium text-center'>
          <tr>
            {columns.map((column, index) => (
              <th
                scope='col'
                className='px-6 py-3 tracking-wider text-center'
                key={index}
              >
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className='bg-[rgb(33,35,37)]'>
          {data.map((val: any, index: number) => (
            <tr
              className='bg-black bg-opacity-20'
              key={index}
            >
              {columns.map((column, index) => {
                return column !== 'ACTION' ? (
                  <td
                    className='px-6 py-4 whitespace-nowrap'
                    key={index}
                  >
                    {val[column]}
                  </td>
                ) : (
                  <td
                    className='px-6 py-4 whitespace-nowrap flex flex-row justify-between mx-[10px]'
                    key={index}
                  >
                    <AiFillEdit
                      className=' text-green-800 cursor-pointer'
                      onClick={() => setHidden(false)}
                    />
                    <AiFillDelete className='text-red-800 cursor-pointer' />
                  </td>
                )
              })}
            </tr>
          ))}
        </tbody>
      </table>
      <EditModal
        hidden={hidden}
        close={() => setHidden(true)}
      />
    </div>
  )
}
