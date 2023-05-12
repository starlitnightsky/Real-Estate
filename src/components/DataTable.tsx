import React from 'react'

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
              <th
                scope='col'
                className='px-6 py-3 text-left tracking-wider text-center'
              >
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
                  return (
                    <td className='px-6 py-4 whitespace-nowrap'>
                      {val[column]}
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
