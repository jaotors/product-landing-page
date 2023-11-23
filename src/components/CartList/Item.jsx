import { useContext } from 'react'
import { XMarkIcon } from '@heroicons/react/24/solid'

import { CartContext } from '../../context/CartContext'

const Item = ({ id }) => {
  const { removeToCart } = useContext(CartContext)

  return (
    <li className='flex items-center justify-between w-full p-2 border-b-[1px] border-b-gray-800'>
      <div className='flex items-center '>
        <div className='flex items-center justify-center w-16 h-16 border border-black'>
          img
        </div>
        <p className='font-medium text-md ml-2'>30L: Midnight Everyday Bag</p>
      </div>
      <button onClick={() => removeToCart(id)}>
        <XMarkIcon className='w-4 h-4' />
      </button>
    </li>
  )
}

export default Item
