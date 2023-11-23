import { useState, createContext } from 'react'

export const CartContext = createContext()

/**
 * cartItem: {
 *  id: new Date().getTime().toString(),
 *  color: black | charcoal | midnight | ash,
 *  size: 20 | 30
 *  price: number
 * }
 */

export const COLOR = {
  black: 'black',
  charcoal: 'charcoal',
  midnight: 'midnight',
  ash: 'ash',
}

export const SIZE = {
  20: '20',
  30: '30',
}

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([])

  const addToCart = (item) => {
    setCart((state) => [...state, item])
  }

  const removeToCart = (id) => {
    setCart((state) => state.filter((item) => item.id !== id))
  }

  const contextValue = {
    cart,
    addToCart,
    removeToCart,
  }

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  )
}

export default CartContextProvider
