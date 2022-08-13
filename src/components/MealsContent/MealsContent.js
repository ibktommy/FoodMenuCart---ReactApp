import React from 'react'
import MealsList from './MealsList/MealsList'
import MealSummary from './MealSummary/MealSummary'

const MealsContent = () => {
  return (
    <>
      <MealSummary />
      <MealsList />
    </>
  )
}

export default MealsContent