import React, { useReducer } from 'react'
import CartContext from './cart-context'

// CART REDUCER
// Set Default/Initial State
const defaultCartState = {
  items: [],
  totalAmount: 0
}

const cartReducerFunc = (state, action) => {
  if (action.type === 'ADD') {
    const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount

    const existingCartItemIndex = state.items.findIndex((item) => item.id === action.item.id)
    const existingCartItem = state.items[existingCartItemIndex]
    let updatedItems;

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount
      }
      updatedItems = [...state.items]
      updatedItems[existingCartItemIndex] = updatedItem
    } else {
      updatedItems = state.items.concat(action.item)
    }
    
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount
    }
  }
  return defaultCartState
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