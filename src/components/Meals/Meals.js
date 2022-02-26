import React from 'react'
import allMeals from './mealsData'
import styles from './Meals.module.css'
import MealCard from './MealCard'
import MealItem from './MealItem'
import MealForm from './MealForm'

const Menu = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles['meals-heading']}>On today's menu</h2>
      <ul className={styles['meals-list']}>
        {allMeals.map(meal => {
          return (
            <MealCard key={meal.id}>
              <MealItem name={meal.name} info={meal.info} price={meal.price} />
              <MealForm id={meal.id} name={meal.name} price={meal.price} />
            </MealCard>
          )
        })}
      </ul>
    </section>
  )
}

export default Menu
