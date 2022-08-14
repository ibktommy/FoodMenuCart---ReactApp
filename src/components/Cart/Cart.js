import React, { useContext } from 'react'
import CartContext from '../../contextStore/cart-context'
import Modal from '../UI/Modal/Modal'
import classes from './Cart.module.css'

const Cart = (props) => {
  // Set Context
  const cartContext = useContext(CartContext)

  // Setting Dummy Data for Cart
  // const dummyCartData = [
  //   {
  //     id: 'c1',
  //     name: 'Sushi',
  //     amount: 2,
  //     price: 12.99,
  //   },
  //   {
  //     id: 'c2',
  //     name: 'Cake',
  //     amount: 3,
  //     price: 11.99,
  //   }
  // ]


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
        <span>35.62</span>
      </div>

      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.closeCart}>Close</button>
        <button className={classes.button}>Order</button>
      </div>

    </Modal>
  )
}

export default Cart