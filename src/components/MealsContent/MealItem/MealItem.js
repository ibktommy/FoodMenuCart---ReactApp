import React from 'react'
import MealItemForm from '../MealItemForm/MealItemForm'
import classes from './MealItem.module.css'

const MealItem = ({ name, price, description }) => {
  // Add To Cart Function Passed as Props to MealItemForm
  const addToCartHandler = amount => {}
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