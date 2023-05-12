import React, { useState } from 'react'
import { AiFillEdit, AiFillDelete } from 'react-icons/ai'
import { MdLock } from 'react-icons/md'

import { EditModal } from './EditModal'
import { DeleteModal } from './DeleteModal'
import { ProfileModal } from './ProfileModal'

export interface DataTableProps {
  columns: string[]
  data: any
}

export const DataTable: React.FC<DataTableProps> = ({ columns, data }) => {
  const [hidden, setHidden] = useState(true)
  const [hiddenDelete, setHiddenDelete] = useState(true)
  const [hiddenProfile, setHiddenProfile] = useState(true)
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
                    className='px-6 py-4 whitespace-nowrap flex flex-row justify-center gap-6 mx-[10px]'
                    key={index}
                  >
                    <MdLock
                      className='w-[20px] h-[20px] text-blue-500 cursor-pointer'
                      onClick={() => setHidden(false)}
                    />
                    <AiFillEdit
                      className='w-[20px] h-[20px] text-green-500 cursor-pointer'
                      onClick={() => setHiddenProfile(false)}
                    />
                    <AiFillDelete
                      className='w-[20px] h-[20px] text-red-500 cursor-pointer'
                      onClick={() => setHiddenDelete(false)}
                    />
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
      <DeleteModal
        hidden={hiddenDelete}
        close={() => setHiddenDelete(true)}
      />
      <ProfileModal
        hidden={hiddenProfile}
        close={() => setHiddenProfile(true)}
      />
    </div>
  )
}
