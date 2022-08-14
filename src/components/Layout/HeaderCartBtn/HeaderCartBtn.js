import React, { useContext } from 'react'
import CartContext from '../../../contextStore/cart-context'
import CartIcon from '../../Cart/CartIcon'
import classes from './HeaderCartBtn.module.css'

const HeaderCartBtn = (props) => {
  // Using The Context
   const cartContext =  useContext(CartContext)

   const numberOfCartItems = cartContext.items.reduce((currentNumber, item) => {
    return currentNumber + item.amount
   }, 0)

  return (
    <button className={classes.button} onClick={props.openCart}>
      <span className={classes.icon}>
        <CartIcon />
      </span>

      <span>
        Your Cart
      </span>

      <span className={classes.badge}>
        {numberOfCartItems}
      </span>
    </button>
  )
}

export default HeaderCartBtn

