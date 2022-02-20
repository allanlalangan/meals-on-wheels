import React from 'react'
import MealForm from './MealForm'
import styles from './Meal.module.css'

const Meal = props => {
  return (
    <li className={styles.mealItem}>
      <p>{props.name}</p>
      <p>{props.info}</p>
      <p>{props.price}</p>
      <MealForm {...props} />
    </li>
  )
}

export default Meal
