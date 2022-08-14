import React from 'react'
import classes from './MealsList.module.css'
import mealsData from '../MealsData'
import Card from '../../UI/Card/Card'
import MealItem from '../MealItem/MealItem'

const MealsList = () => {
  return (
    <section className={classes.meals}>
      <Card>
        <ul>
          {
            mealsData.map((meal) => {
              // Destructuring Object Values From the MealData
              const { id, name, description, price } = meal

              return (
                <MealItem key={id} name={name} description={description} price={price} id={id}/>
              )
            })
          }
        </ul>
      </Card>
    </section>
  )
}

export default MealsList