import React, { useState } from 'react'
import ImageUploading, { ImageListType } from 'react-images-uploading'
import { FaFileUpload } from 'react-icons/fa'
import { MdDelete } from 'react-icons/md'

type UploadType = {
  multiple: boolean
}
export function ImageUpload({ multiple }: UploadType) {
  const [images, setImages] = useState([])
  const maxNumber = 69

  const onChange = (
    imageList: ImageListType,
    addUpdateIndex: number[] | undefined
  ) => {
    setImages(imageList as never[])
  }

  return (
    <div className=' w-full h-full border p-3'>
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
          <div className='upload__image-wrapper flex flex-col gap-3 items-center'>
            <div className='flex justify-center gap-3'>
              <button
                style={isDragging ? { color: 'red' } : undefined}
                className='flex justify-center items-center w-[100px] h-[35px] text-gray-700 font-bold border-gray-400 border rounded-[10px] select-none cursor-pointer bg-yellow-200 hover:bg-amber-300 active:bg-amber-400'
                onClick={onImageUpload}
                {...dragProps}
              >
                <FaFileUpload className='w-[20px] h-[20px] mr-2 text-gray-700' />
                Upload
              </button>
              &nbsp;
              <button
                className='flex justify-center items-center w-[100px] h-[35px] text-gray-700 font-bold border-gray-400 border rounded-[10px] select-none cursor-pointer bg-yellow-200 hover:bg-amber-300 active:bg-amber-400'
                onClick={onImageRemoveAll}
              >
                <MdDelete className='w-[23px] h-[23px] mr-1 text-gray-700' />
                Remove
              </button>
            </div>
            {!multiple
              ? (!imageList || (imageList && imageList.length === 0)) && (
                  <p className='text-4xl font-semibold text-white items-center mt-10'>
                    Banner image
                  </p>
                )
              : (!imageList || (imageList && imageList.length === 0)) && (
                  <p className='text-4xl font-semibold text-white'>
                    Minimum 2 images
                  </p>
                )}
            <div className='flex flex-wrap gap-3'>
              {imageList.map((image, index) => (
                <div
                  key={index}
                  className='image-item'
                >
                  <img
                    src={image.dataURL}
                    alt=''
                    className={`${
                      multiple ? 'w-[50px] h-[50px]' : 'w-[200px] h-[200px]'
                    }`}
                  />
                  {multiple && (
                    <div className='image-item__btn-wrapper'>
                      <button onClick={() => onImageUpdate(index)}>
                        Update
                      </button>
                      <button onClick={() => onImageRemove(index)}>
                        Remove
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </ImageUploading>
    </div>
  )
}
