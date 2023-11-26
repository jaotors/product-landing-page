import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import CartPopover from '../CartPopover'

const Navbar = () => {
  return (
    <div className='fixed top-0 w-full bg-white flex justify-between items-center border-b border-b-black px-1'>
      <h1 className='text-3xl font-black text-gray-800 py-3'>
        <a href='#home'>Everyday Bag!</a>
      </h1>
      <nav className='hidden md:flex text-gray-800'>
        <a
          className='px-2 py-4 font-medium border-b-4 border-b-transparent hover:border-b-gray-800'
          href='#gallery'
        >
          Gallery
        </a>
        <a
          className='p-4 font-medium border-b-4 border-transparent hover:border-b-gray-800'
          href='#the-product'
        >
          The Product
        </a>
        <CartPopover direction='bottom' />
      </nav>
      <div className='md:hidden flex'>
        <Popover.Group>
          <Popover className='relative'>
            {({ open }) => (
              <>
                <Popover.Button className='rounded text-black py-2 px-4'>
                  {open ? (
                    <XMarkIcon className='w-6 h-6' />
                  ) : (
                    <Bars3Icon className='w-6 h-6' />
                  )}
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
                  <Popover.Panel className='absolute right-0 z-10 mt-1 w-screen max-w-[320px] sm:px-0 lg:max-w-3xl'>
                    <div className='overflow-hidden bg-white rounded shadow ring-1 ring-black/5'>
                      <nav className='flex flex-col'>
                        <a
                          className='px-2 py-4 font-medium hover:text-white hover:bg-gray-800'
                          href='#gallery'
                        >
                          Gallery
                        </a>
                        <a
                          className='px-2 py-4 font-medium hover:text-white hover:bg-gray-800'
                          href='#the-product'
                        >
                          The Product
                        </a>
                      </nav>
                    </div>
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>
        </Popover.Group>
      </div>
      <div className='md:hidden fixed bottom-4 right-4'>
        <CartPopover primary direction='top' />
      </div>
    </div>
  )
}

export default Navbar
