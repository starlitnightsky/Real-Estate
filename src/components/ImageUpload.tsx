import React, { useState } from 'react'
import ImageUploading, { ImageListType } from 'react-images-uploading'
import { FaFileUpload } from 'react-icons/fa'
import { MdDelete } from 'react-icons/md'
import { IoRefreshCircle } from 'react-icons/io5'
import { TiDelete } from 'react-icons/ti'

type UploadType = {
  multiple: boolean
  text?: string
}
export function ImageUpload({ multiple, text }: UploadType) {
  const [images, setImages] = useState([])
  const maxNumber = 69

  const onChange = (
    imageList: ImageListType,
    addUpdateIndex: number[] | undefined
  ) => {
    setImages(imageList as never[])
  }

  return (
    <div className=' w-full h-full border'>
      <ImageUploading
        multiple={multiple}
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps,
        }) => (
          <>
            {text !== 'Agent Image' && (
              <div className='flex justify-center gap-3 my-2'>
                <button
                  style={isDragging ? { color: 'red' } : undefined}
                  className='flex justify-center items-center w-[100px] h-[35px] text-gray-700 font-bold border-gray-400 border rounded-[10px] select-none cursor-pointer bg-yellow-200 hover:bg-amber-300 active:bg-amber-400'
                  onClick={onImageUpload}
                  {...dragProps}
                >
                  <FaFileUpload className='w-[20px] h-[20px] mr-2 text-gray-700' />
                  Upload
                </button>
                <button
                  className='flex justify-center items-center w-[100px] h-[35px] text-gray-700 font-bold border-gray-400 border rounded-[10px] select-none cursor-pointer bg-yellow-200 hover:bg-amber-300 active:bg-amber-400'
                  onClick={onImageRemoveAll}
                >
                  <MdDelete className='w-[23px] h-[23px] mr-1 text-gray-700' />
                  Remove
                </button>
              </div>
            )}
            <div
              className={`upload__image-wrapper flex flex-col gap-3 items-center ${
                text === 'Agent Image' ? 'w-[280px] h-[280px]' : ''
              }`}
            >
              {(!imageList || (imageList && imageList.length === 0)) && (
                <p
                  className={`text-4xl font-semibold text-white items-center ${
                    !multiple ? 'mt-10' : ''
                  }`}
                >
                  {text}
                </p>
              )}
              <div className='flex flex-wrap gap-5'>
                {imageList.map((image, index) => (
                  <div
                    key={index}
                    className='image-item'
                  >
                    <img
                      src={image.dataURL}
                      alt=''
                      className={`${
                        multiple
                          ? 'w-[50px] h-[50px]'
                          : text === 'Agent Image'
                          ? 'w-[280px] h-[280px]'
                          : 'w-[280px] h-[230px]'
                      }`}
                    />
                    {multiple && (
                      <div className='image-item__btn-wrapper flex text-yellow-200'>
                        <button onClick={() => onImageUpdate(index)}>
                          <IoRefreshCircle className='w-[30px] h-[30px]' />
                        </button>
                        <button onClick={() => onImageRemove(index)}>
                          <TiDelete className='w-[35px] h-[35px]' />
                        </button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            {text === 'Agent Image' && (
              <div className='flex justify-center gap-3 mt-5'>
                <button
                  style={isDragging ? { color: 'red' } : undefined}
                  className='flex justify-center items-center w-[100px] h-[35px] text-gray-700 font-bold border-gray-400 border rounded-[10px] select-none cursor-pointer bg-yellow-200 hover:bg-amber-300 active:bg-amber-400'
                  onClick={onImageUpload}
                  {...dragProps}
                >
                  <FaFileUpload className='w-[20px] h-[20px] mr-2 text-gray-700' />
                  Upload
                </button>
                <button
                  className='flex justify-center items-center w-[100px] h-[35px] text-gray-700 font-bold border-gray-400 border rounded-[10px] select-none cursor-pointer bg-yellow-200 hover:bg-amber-300 active:bg-amber-400'
                  onClick={onImageRemoveAll}
                >
                  <MdDelete className='w-[23px] h-[23px] mr-1 text-gray-700' />
                  Remove
                </button>
              </div>
            )}
          </>
        )}
      </ImageUploading>
    </div>
  )
}
