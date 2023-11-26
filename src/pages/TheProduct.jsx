import { useState, useContext, useCallback } from 'react'

import { CartContext } from '../context/CartContext'

import Section from '../components/Section'

import VariantBox from '../components/VariantBox'

import COLORS from '../fixtures/COLORS'
import SIZES from '../fixtures/SIZES'
import PRICE from '../fixtures/PRICES'
import BAGS from '../fixtures/BAGS'

const TheProduct = () => {
  const { addToCart } = useContext(CartContext)

  const [selectedColor, setSelectedColor] = useState('black')
  const [selectedSize, setSelectedSize] = useState(20)

  const handleAddToCart = useCallback(() => {
    const cartItem = {
      color: selectedColor,
      size: selectedSize,
      price: PRICE[selectedSize],
    }

    addToCart(cartItem)
  }, [selectedColor, selectedSize])

  return (
    <Section
      id='the-product'
      className='grid grid-cols-1 sm:grid-cols-2 items-center gap-2'
    >
      <div className='flex flex-col justify-center items-center gap-2 p-4'>
        <div className='max-w-[360px] w-full justify-center itemes-center'>
          <img
            src={BAGS[`${selectedSize}${selectedColor}`]}
            alt={'Preview Bag'}
          />
        </div>
        <div className='flex justify-center items-center gap-2'>
          {Object.keys(COLORS).map((color, idx) => (
            <button key={color + idx} onClick={() => setSelectedColor(color)}>
              <VariantBox
                type='color'
                color={color}
                isActive={selectedColor === color}
              />
            </button>
          ))}
        </div>
        <div className='flex justify-center items-center gap-2'>
          {Object.keys(SIZES).map((size, idx) => (
            <button
              key={size + idx}
              onClick={() => setSelectedSize(parseInt(size))}
            >
              <VariantBox isActive={selectedSize === parseInt(size)}>
                {`${size}L`}
              </VariantBox>
            </button>
          ))}
        </div>
      </div>
      <div className='flex flex-col text-center gap-4 p-4'>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam velit
          dolorem dicta inventore doloremque similique iure error modi sit, esse
          nam ipsam quia cupiditate! Deserunt nam a atque vel? Officia!
        </p>
        <h3 className='text-3xl mb-3'>
          Price: <strong>${PRICE[selectedSize]}</strong>
        </h3>
        <div className='flex justify-center items-center'>
          <button
            className='border-gray-800 bg-gray-800 px-8 py-4 border rounded text-white hover:bg-white hover:text-gray-800 text-xl uppercase font-black'
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </Section>
  )
}

export default TheProduct
