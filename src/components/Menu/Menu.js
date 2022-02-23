import React from 'react'
import styles from './Menu.module.css'
import Meal from './Meal'
import allMeals from './mealsData'
import MealForm from './MealForm'

const Menu = () => {
  return (
    <section className={styles.container}>
      <ul className={styles.mealsList}>
        <h2 className={styles.menuHeading}>On today's menu</h2>
        {allMeals.map(meal => {
          return (
            <>
              <Meal
                key={meal.id}
                name={meal.name}
                info={meal.info}
                price={meal.price}
              />
              <MealForm
                key={meal.id}
                name={meal.name}
                info={meal.info}
                price={meal.price}
              />
            </>
          )
        })}
      </ul>
    </section>
  )
}

export default Menu
