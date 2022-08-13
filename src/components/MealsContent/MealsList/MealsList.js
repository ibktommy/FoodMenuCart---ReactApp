import React from 'react'
import classes from './MealsList.module.css'
import mealsData from '../MealsData'

const MealsList = () => {
  return (
    <section className={classes.meals}>
      <ul>
        {
          mealsData.map((meal) => {
            return (
              <h1>{meal.name}</h1>
            )
          })
        }
      </ul>
    </section>
  )
}

export default MealsList