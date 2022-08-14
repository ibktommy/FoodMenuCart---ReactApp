import React, { useContext } from 'react'
import CartContext from '../../contextStore/cart-context'
import Modal from '../UI/Modal/Modal'
import classes from './Cart.module.css'
import CartItem from './CartItem/CartItem'

const Cart = (props) => {
  // Set Context
  const cartContext = useContext(CartContext)

  // Variable for the Total Amount from cart Context
  const totalAmount = `$${cartContext.totalAmount.toFixed(2)}`

  // Variable to check if there is items in the Cart Context
  const checkCartItems = cartContext.items.length > 0

  return (
    <Modal closeCart={props.closeCart}>
      <ul className={classes['cart-items']}>
        {
          cartContext.items.map((cartItem) => {
            const { name, id, amount, price } = cartItem
            return (
              <CartItem key={id} name={name} amount={amount} price={price} />
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
        {checkCartItems && <button className={classes.button}>Order</button>}
      </div>

    </Modal>
  )
}

export default Cart