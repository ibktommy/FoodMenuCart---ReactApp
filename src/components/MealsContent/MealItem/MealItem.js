import React from 'react'
import classes from './MealItem.module.css'

const MealItem = ({ name, price, description }) => {
  return (
    <li className={classes.meal}>
      <div>
        <h3>{name}</h3>
        <p className={classes.description}>{description}</p>
        <p className={classes.price}>{`$${price.toFixed(2)}`}</p>
      </div>
      {/* <div></div> */}
    </li>
  )
}

export default MealItem