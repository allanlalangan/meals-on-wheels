import React, { useContext, useReducer } from 'react'
import Button from '../UI/Button'
import styles from './MealForm.module.css'
import CartContext from '../store/cartContext'

const MealForm = props => {
  const cartContext = useContext(CartContext)

  const handleAddMeals = e => {
    e.preventDefault()
  }

  return (
    <div>
      <form onSubmit={handleAddMeals}>
        <label htmlFor='quantity'>Qty</label>
        <input
          className={styles.input}
          id='quantity'
          type='number'
          step='1'
          min='1'
          max='5'
          defaultValue='1'
        />
        <Button type='button'>-</Button>
        <Button type='button'>+</Button>
        <Button type='submit'>Add</Button>
      </form>
    </div>
  )
}

export default MealForm
