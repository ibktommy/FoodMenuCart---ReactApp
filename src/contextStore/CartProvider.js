import React, { useReducer } from 'react'
import CartContext from './cart-context'
import { cartReducerFunc } from '../components/Cart/CartReducer/cartReducerFunc'

// CART REDUCER
// Set Default/Initial State
const defaultCartState = {
  items: [],
  totalAmount: 0
}


// CART PROVIDER COMPONENT
const CartProvider = ({ children }) => {
  // Set useReducer 
  const [cartState, dispatchCartFunc] = useReducer(cartReducerFunc, defaultCartState)

  // Create Functions that will be added to the Context Values
  const addItemToCartHandler = (item) => {
    dispatchCartFunc({ type: 'ADD', item: item })
  }
  const removeItemFromCartHandler = (id) => { }


  // Creating the Context Value Object
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
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