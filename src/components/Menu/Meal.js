import React from 'react'
import styles from './Meal.module.css'

const Meal = props => {
  return (
    <div className={styles.mealCard}>
      <p>{props.name}</p>
      <p>{props.info}</p>
      <p>{props.price}</p>
    </div>
  )
}

export default Meal
