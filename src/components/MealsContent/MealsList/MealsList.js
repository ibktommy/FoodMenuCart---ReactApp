import React from 'react'
import classes from './MealsList.module.css'
import mealsData from '../MealsData'
import Card from '../../UI/Card/Card'

const MealsList = () => {
  return (
    <section className={classes.meals}>
      <Card>
        <ul>
          {
            mealsData.map((meal) => {
              return (
                <h1>{meal.name}</h1>
              )
            })
          }
        </ul>
      </Card>
    </section>
  )
}

export default MealsList