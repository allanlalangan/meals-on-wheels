import React from 'react'
import styles from './Meal.module.css'

const Meal = props => {
  return (
    <li className={styles.mealItem}>
      <p>{props.name}</p>
      <p>{props.info}</p>
      <p>{props.price}</p>
    </li>
  )
}

export default Meal
