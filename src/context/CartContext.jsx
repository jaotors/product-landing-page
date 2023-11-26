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

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([])

  const addToCart = (item) => {
    const cartItem = {
      id: new Date().getTime().toString(),
      ...item,
    }
    setCart((state) => [...state, cartItem])
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
