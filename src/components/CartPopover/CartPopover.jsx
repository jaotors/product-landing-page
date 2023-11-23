import { Fragment, useContext } from 'react'
import clsx from 'clsx'
import { Popover, Transition } from '@headlessui/react'
import { ShoppingCartIcon, XMarkIcon } from '@heroicons/react/24/solid'

import { CartContext } from '../../context/CartContext'

const CartPopover = ({ primary = false, direction = 'bottom' }) => {
  const { cart } = useContext(CartContext)

  const cartWidgetNum =
    cart.length > 0 ? `${cart.length > 9 ? `9+` : cart.length}` : ''

  return (
    <Popover.Group>
      <Popover className='relative'>
        <Popover.Button
          className={clsx(
            'relative py-2 px-4',
            primary
              ? 'rounded-full border border-gray-800 hover:bg-gray-800 hover:text-white'
              : ''
          )}
        >
          {cart.length > 0 ? (
            <p className='absolute top-1 right-1 flex items-center justify-center text-white bg-red-400 w-5 h-5 rounded-full text-[0.65rem]'>
              {cartWidgetNum}
            </p>
          ) : null}
          <ShoppingCartIcon className='w-6 h-10' />
        </Popover.Button>
        <Transition
          as={Fragment}
          enter='transition ease-out duration-200'
          enterFrom='opacity-0 translate-y-1'
          enterTo='opacity-100 translate-y-0'
          leave='transition ease-in duration-150'
          leaveFrom='opacity-100 translate-y-0'
          leaveTo='opacity-0 translate-y-1'
        >
          <Popover.Panel
            className={clsx(
              'absolute right-0 mb-1 z-10 w-screen max-w-sm sm:px-0 lg:max-w-3xl',
              direction === 'top' ? 'bottom-full' : ''
            )}
          >
            <div className='overflow-hidden bg-white rounded shadow ring-1 ring-black/5 max-h-[320px]'>
              {cart.length > 1 ? (
                <p className='text-lg text-center font-medium p-2'>
                  No items yet!
                </p>
              ) : (
                <>
                  <ul className='w-full max-h-[16rem] overflow-y-scroll scroll overflow-hidden border-b-2'>
                    <li className='flex items-center justify-between w-full p-2 border-b-[1px] border-b-gray-800'>
                      <div className='flex items-center '>
                        <div className='flex items-center justify-center w-16 h-16 border border-black'>
                          img
                        </div>
                        <p className='font-medium text-md ml-2'>
                          30L: Midnight Everyday Bag
                        </p>
                      </div>
                      <button>
                        <XMarkIcon className='w-4 h-4' />
                      </button>
                    </li>
                  </ul>
                  <div className='flex items-center justify-between w-full p-4'>
                    <p className='text-md font-black'>Total: $00.00</p>
                    <button className='border border-gray-800 rounded px-6 py-2'>
                      Checkout
                    </button>
                  </div>
                </>
              )}
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </Popover.Group>
  )
}

export default CartPopover
