import React, { useContext } from 'react'
import CartContext from '../../contextStore/cart-context'
import Modal from '../UI/Modal/Modal'
import classes from './Cart.module.css'

const Cart = (props) => {
  // Set Context
  const cartContext = useContext(CartContext)

  // Variable for the Total Amount from cart Context
  const totalAmount = `$${cartContext.totalAmount.toFixed(2)}`

  return (
    <Modal closeCart={props.closeCart}>
      <ul className={classes['cart-items']}>
        {
          cartContext.items.map((cartItem) => {
            return (
              <li key={cartItem.id}>
                {cartItem.name}
              </li>
            )
          })
        }
      </ul>

      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>

      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.closeCart}>Close</button>
        <button className={classes.button}>Order</button>
      </div>

    </Modal>
  )
}

export default Cart