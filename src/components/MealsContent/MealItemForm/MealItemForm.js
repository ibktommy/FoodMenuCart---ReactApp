import React, { useRef } from 'react'
import Input from '../../UI/Input/Input'
import classes from './MealItemForm.module.css'

const MealItemForm = () => {
  // Setting useRef Hook
  const amountInputRef = useRef()
  // Submit Handler Function
  const submitHandler = e => {
    e.preventDefault()
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input 
        ref={amountInputRef}
        label='Amount' 
        input={{
        id: 'Amount',
        type:'number',
        min: 1,
        max: 5,
        step: 1,
        defaultValue: 1,
      }}/>
      <button>+ Add</button>
    </form>
  )
}

export default MealItemForm