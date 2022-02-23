import React from 'react'
import Button from '../UI/Button'
import styles from './MealForm.module.css'

const MealForm = props => {
  const handleAddMeal = e => {
    e.preventDefault()
  }

  return (
    <div>
      <form onSubmit={handleAddMeal}>
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
