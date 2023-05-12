import React, { useState } from 'react'
import ImageUploading, { ImageListType } from 'react-images-uploading'

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
    // console.log(imageList, addUpdateIndex)
    setImages(imageList as never[])
  }

  return (
    <div>
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
          // write your building UI
          <div className='upload__image-wrapper'>
            <button
              style={isDragging ? { color: 'red' } : undefined}
              onClick={onImageUpload}
              {...dragProps}
            >
              Upload
            </button>
            &nbsp;
            <button onClick={onImageRemoveAll}>Remove</button>
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
                      multiple
                        ? 'w-[50px] h-[50px]'
                        : 'rounded-full w-[200px] h-[200px]'
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
