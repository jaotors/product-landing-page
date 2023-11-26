import { useState } from 'react'

import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'

const Carousel = ({ items = [] }) => {
  const [current, setCurrent] = useState(0)

  const handlePrevious = () => {
    if (current === 0) {
      setCurrent(items.length - 1)
    } else {
      setCurrent(current - 1)
    }
  }

  const handleNext = () => {
    if (current === items.length - 1) {
      setCurrent(0)
    } else {
      setCurrent(current + 1)
    }
  }

  return (
    <div className='relative w-[60%] m-auto overflow-hidden'>
      <div className='absolute w-full h-full flex justify-between items-center z-10 px-1'>
        <button
          className='border rounded-full border-gray-800 bg-white hover:text-white hover:bg-gray-800'
          onClick={handlePrevious}
        >
          <ChevronLeftIcon className='w-6 h-6' />
        </button>
        <button
          className='border rounded-full border-gray-800 bg-white hover:text-white hover:bg-gray-800'
          onClick={handleNext}
        >
          <ChevronRightIcon className='w-6 h-6' />
        </button>
      </div>
      <div
        className='flex transition ease-out duration-500 rounded'
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {items.map((slide, idx) => (
          <img
            className='border rounded border-gray-800'
            key={`slide-preview-${idx}`}
            src={slide}
            alt={`Slide Image ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default Carousel
