import React from 'react'
import styles from './MealItem.module.css'

const MealItem = props => {
  return (
    <div className={styles['meal-item']}>
      <h3 className={styles['meal-name']}>{props.name}</h3>
      <p className={styles['meal-info']}>{props.info}</p>
      <p className={styles['meal-price']}>{`$${props.price}`}</p>
    </div>
  )
}

export default MealItem
