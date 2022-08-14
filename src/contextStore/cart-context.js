import React from 'react'

// CREATE CONTEXT FOR CART
const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {}
})

export default CartContext