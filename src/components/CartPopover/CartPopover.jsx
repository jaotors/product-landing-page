import { Fragment } from 'react'
import clsx from 'clsx'
import { Popover, Transition } from '@headlessui/react'
import { ShoppingCartIcon } from '@heroicons/react/24/solid'

const CartPopover = ({ primary = false, direction = 'bottom' }) => {
  return (
    <Popover.Group>
      <Popover className='relative'>
        <Popover.Button
          className={clsx(
            'py-2 px-4',
            primary
              ? 'rounded-full border border-gray-800 hover:bg-gray-800 hover:text-white'
              : ''
          )}
        >
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
            <div className='overflow-hidden bg-white rounded shadow ring-1 ring-black/5'>
              Popup Cart holder
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </Popover.Group>
  )
}

export default CartPopover
