import React from 'react'
import styles from './Menu.module.css'
import Meal from './Meal'
import allMeals from './mealsData'
import MealForm from './MealForm'

const Menu = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.menuHeading}>On today's menu</h2>
      <ul className={styles.mealsList}>
        {allMeals.map(meal => {
          return (
            <li key={meal.id} className={styles['order-meal-card']}>
              <Meal name={meal.name} info={meal.info} price={meal.price} />
              <MealForm name={meal.name} price={meal.price} />
            </li>
          )
        })}
      </ul>
    </section>
  )
}

export default Menu
