import { Fragment, useContext, useRef, useEffect } from 'react'
import clsx from 'clsx'
import { Popover, Transition } from '@headlessui/react'
import { ShoppingCartIcon } from '@heroicons/react/24/solid'

import { CartContext } from '../../context/CartContext'
import CartList from '../CartList/CartList'

const CartPopover = ({ primary = false, direction = 'bottom' }) => {
  const cartRef = useRef()
  const { cart, clearAll } = useContext(CartContext)

  const cartWidgetNum =
    cart.length > 0 ? `${cart.length > 9 ? `9+` : cart.length}` : ''

  const totalPrice = cart.reduce((acc, val) => {
    return acc + val.price
  }, 0)

  useEffect(() => {
    if (cartRef.current && cart.length > 0) {
      cartRef.current.click()
    }
  }, [cartRef, cart])

  return (
    <Popover.Group>
      <Popover className='relative'>
        <Popover.Button
          ref={cartRef}
          className={clsx(
            'relative py-2 px-4',
            primary
              ? 'rounded-full border border-gray-800 bg-white hover:bg-gray-800 hover:text-white'
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
              'absolute right-0 mb-1 z-10 w-screen max-w-[310px] sm:px-0 lg:max-w-3xl',
              direction === 'top' ? 'bottom-full' : ''
            )}
          >
            <div className='overflow-hidden bg-white rounded shadow ring-1 ring-black/5 max-h-[400px]'>
              {cart.length < 1 ? (
                <p className='text-lg text-center font-medium p-2'>
                  No items yet!
                </p>
              ) : (
                <>
                  <div className='flex justify-end p-2 text-[0.75rem] border-b border-b-gray-800'>
                    <button
                      className='border border-gray-800 rounded hover:bg-gray-800 hover:text-white p-2 capitalize'
                      onClick={clearAll}
                    >
                      Clear all
                    </button>
                  </div>
                  <CartList items={cart} />
                  <div className='flex items-center justify-between w-full p-4'>
                    <p className='text-md font-black'>
                      Total: ${Math.round(totalPrice * 100) / 100}
                    </p>
                    <button className='border border-gray-800 rounded hover:bg-gray-800 hover:text-white px-6 py-2 uppercase'>
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
