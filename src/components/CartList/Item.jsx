import { useContext } from 'react'

import { CartContext } from '../../context/CartContext'
import BAGS from '../../fixtures/BAGS'

import { XMarkIcon } from '@heroicons/react/24/solid'

const Item = ({ item }) => {
  const { removeToCart } = useContext(CartContext)

  const name = `${item.size}L: ${item.color} Everyday Bag`

  return (
    <li className='flex items-center justify-between w-full p-2 border-b-[1px] border-b-gray-800'>
      <div className='flex items-center '>
        <div className='flex items-center justify-center w-16 h-16 border border-black'>
          <img
            src={BAGS[`${item.size}${item.color}`]}
            alt={`${item.size}L ${item.color}`}
          />
        </div>
        <p className='font-medium text-md ml-2 capitalize'>{name}</p>
      </div>
      <button onClick={() => removeToCart(item.id)}>
        <XMarkIcon className='w-4 h-4' />
      </button>
    </li>
  )
}

export default Item
