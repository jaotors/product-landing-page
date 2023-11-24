import { useContext } from 'react'

import { CartContext } from '../context/CartContext'

import PRICE from '../fixtures/PRICE'

import BagDefault from '../assets/bag/default-bag-1.jpg'

const Home = () => {
  const { addToCart } = useContext(CartContext)

  const handleAddToCart = () => {
    const cartItem = {
      id: new Date().getTime().toString(),
      color: 'black',
      size: 30,
      price: PRICE[30],
    }

    addToCart(cartItem)
  }

  return (
    <section
      id='home'
      className='w-full h-screen flex flex-col items-center justify-center'
    >
      <div className='max-w-[360px] sm:w-full'>
        <img src={BagDefault} alt='Bag Default' />
      </div>
      <h1 className='text-4xl font-black mb-1'>Everyday Bag!</h1>
      <p className='mb-2 text-lg max-w-[400px] text-center p-2'>
        An iconic, award-winning pack for everyday and photo carry, the newly
        revamped Everyday Backpack is built around access, organization,
        expansion, and protection.
      </p>
      <h3 className='text-3xl mb-3'>
        Price: <strong>${PRICE[30]}</strong>
      </h3>
      <button
        className='border-gray-800 bg-gray-800 px-8 py-4 border rounded text-white hover:bg-white hover:text-gray-800 text-xl uppercase font-black'
        onClick={handleAddToCart}
      >
        Add to Cart
      </button>
    </section>
  )
}

export default Home
