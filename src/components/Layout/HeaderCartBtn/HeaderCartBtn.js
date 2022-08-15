import React, { useContext, useEffect, useState } from 'react'
import CartContext from '../../../contextStore/cart-context'
import CartIcon from '../../Cart/CartIcon'
import classes from './HeaderCartBtn.module.css'

const HeaderCartBtn = (props) => {
  // Using The Context
   const cartContext =  useContext(CartContext)
  //  Setting State to monitor the Cart Button Animation
  const [cartButtonBump, setCartButtonBump] = useState(false)

   const numberOfCartItems = cartContext.items.reduce((currentNumber, item) => {
    return currentNumber + item.amount
   }, 0)

  //  Pulling Cart Items out from the Cart Context
  const { items } = cartContext

  // Setting Dynamic Class for the cart Button
  const cartButton = `${classes.button} ${cartButtonBump ? classes.bump : ''}`

  // Using UseEffect to Effect the Cart Button Animation anytime the cartItems is changed/re-rendered
  useEffect(() => {
    if (items.length === 0) {
      return
    }

    setCartButtonBump(true)

    const timer = setTimeout(() => {
      setCartButtonBump(false)
    }, 300)

    // Clear setTimeout
    return () => {
      clearTimeout(timer)
    }
  }, [items])

  return (
    <button className={cartButton} onClick={props.openCart}>
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

