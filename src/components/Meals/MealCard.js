import React from 'react'
import styles from './MealCard.module.css'

const MealCard = props => {
  return <li className={styles['meal-card']}>{props.children}</li>
}

export default MealCard
