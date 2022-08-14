import React, { useContext } from 'react'
import CartContext from '../../../contextStore/cart-context'
import MealItemForm from '../MealItemForm/MealItemForm'
import classes from './MealItem.module.css'

const MealItem = ({ id, name, price, description }) => {
  // Using Cart Context
  const cartContext = useContext(CartContext)

  // Add To Cart Function Passed as Props to MealItemForm
  const addToCartHandler = amount => {
    cartContext.addItemToCart({
      id: id,
      name: name,
      amount: amount,
      price: price
    })
  }


  return (
    <li className={classes.meal}>
      <div>
        <h3>{name}</h3>
        <p className={classes.description}>{description}</p>
        <p className={classes.price}>{`$${price.toFixed(2)}`}</p>
      </div>
      <div>
        <MealItemForm onAddToCart={addToCartHandler}/>
      </div>
    </li>
  )
}

export default MealItem