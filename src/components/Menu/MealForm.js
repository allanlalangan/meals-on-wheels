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
        <label htmlFor={props.key}>QTY</label>
        <input className={styles.input} id={props.key} type='number' />
        <Button type='button'>-</Button>
        <Button type='button'>+</Button>
        <Button type='submit'>Add</Button>
      </form>
    </div>
  )
}

export default MealForm
