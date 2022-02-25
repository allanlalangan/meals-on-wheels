import React, { useRef, useContext, useReducer } from 'react'
import CartContext from '../store/cartContext'
import styles from './Menu.module.css'
import Meal from './Meal'
import allMeals from './mealsData'
import MealForm from './MealForm'

const Menu = () => {
  const cartContext = useContext(CartContext)
  const handleAddMeal = item => {
    cartContext.addItem(item)
  }

  return (
    <section className={styles.container}>
      <h2 className={styles.menuHeading}>On today's menu</h2>
      <ul className={styles.mealsList}>
        {allMeals.map(meal => {
          return (
            <li className={styles['order-meal-card']}>
              <Meal
                key={meal.id}
                name={meal.name}
                info={meal.info}
                price={meal.price}
              />
              <MealForm
                name={meal.name}
                id={meal.id}
                price={meal.price}
                onAddMeal={handleAddMeal}
              />
            </li>
          )
        })}
      </ul>
    </section>
  )
}

export default Menu
