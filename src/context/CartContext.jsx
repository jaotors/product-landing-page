import { useState, createContext } from 'react'

export const CartContext = createContext()

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

  const clearAll = () => {
    setCart([])
  }

  const contextValue = {
    cart,
    addToCart,
    removeToCart,
    clearAll,
  }

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  )
}

export default CartContextProvider
