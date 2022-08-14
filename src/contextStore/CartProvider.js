import React from 'react'
import CartContext from './cart-context'

const CartProvider = ({ children }) => {
  // Creating the Context Value Object
  const cartContext = {
    items: [],
    totalAmount: 0,
  }

  return (
    <CartContext.Provider value={cartContext}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider