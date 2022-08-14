import React from 'react'
import CartContext from './cart-context'

const CartProvider = ({ children }) => {
  // Create Functions that will be added to the Context Values
  const addItemToCartHandler = (item) => { }
  const removeItemFromCartHandler = (id) => { }


  // Creating the Context Value Object
  const cartContext = {
    items: [],
    totalAmount: 0,
    addItemToCart: addItemToCartHandler,
    removeItemFromCart: removeItemFromCartHandler
  }

  return (
    <CartContext.Provider value={cartContext}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider