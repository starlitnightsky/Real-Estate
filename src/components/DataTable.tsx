import React from 'react'
import { AiFillEdit, AiFillDelete } from 'react-icons/ai'
export interface DataTableProps {
  columns: string[]
  data: any
}

export const DataTable: React.FC<DataTableProps> = ({ columns, data }) => {
  return (
    <div className='shadow overflow-hidden sm:rounded-lg px-[100px]'>
      <table className='min-w-full text-sm text-white'>
        <thead className='bg-[rgb(33,35,37)] text-xs uppercase font-medium text-center'>
          <tr>
            {columns.map((column) => (
              <th scope='col' className='px-6 py-3 tracking-wider text-center'>
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className='bg-[rgb(33,35,37)]'>
          {data.map((val: any) => {
            return (
              <tr className='bg-black bg-opacity-20'>
                {columns.map((column) => {
                  return column !== 'ACTION' ? (
                    <td className='px-6 py-4 whitespace-nowrap'>
                      {val[column]}
                    </td>
                  ) : (
                    <td className='px-6 py-4 whitespace-nowrap flex flex-row justify-between mx-[10px]'>
                      <AiFillEdit className=' text-green-800 cursor-pointer' />
                      <AiFillDelete className='text-red-800 cursor-pointer' />
                    </td>
                  )
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
