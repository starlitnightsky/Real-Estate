import React from 'react'

type SelectType = {
  optionText: string[]
  showProperty?: () => void
  showDateAvailability?: () => void
  showLifestyle?: () => void
  hideProperty?: () => void
  hideDateAvailability?: () => void
  hideLifestyle?: () => void
}

const texts = [
  'Beachfront',
  'Downtown Living',
  'Golf Estates',
  'Luxury penthouses',
  'Sea Facing Properties',
  'Waterfront Properties',
  'Resedential Communities',
]

export function CustomSelect({
  optionText,
  showProperty,
  showDateAvailability,
  showLifestyle,
  hideProperty,
  hideDateAvailability,
  hideLifestyle,
}: SelectType) {
  function show(str: string) {
    if (
      str === 'Penthouse' ||
      str === 'Apartments' ||
      str === 'Loft & Duplex'
    ) {
      showProperty && showProperty()
    } else if (
      str === 'Villas' ||
      str === 'Townhouse' ||
      str === 'Plot' ||
      str === 'Office'
    ) {
      hideProperty && hideProperty()
    }
    if (str === 'Offplan') {
      showDateAvailability && showDateAvailability()
    } else if (str === 'Ready') {
      hideDateAvailability && hideDateAvailability()
    }
    if (str === 'Others') {
      showLifestyle && showLifestyle()
    } else if (texts.indexOf(str) !== -1) {
      hideLifestyle && hideLifestyle()
    }
  }
  return (
    <select
      className='block py-2.5 px-0 w-full text-base bg-transparent border-0 border-b-2 appearance-none text-gray-300 border-gray-200 focus:outline-none focus:ring-0 focus:border-gray-200 peer'
      onChange={(item) => show(item.currentTarget.value)}
    >
      {optionText.map((str, index) => (
        <option
          value={str}
          className='bg-zinc-800 text-gray-300 border-none'
          key={index}
        >
          {str}
        </option>
      ))}
    </select>
  )
}
