import React from 'react'
import styles from './FormActions.module.css'
import Button from '../UI/Button'

const FormActions = (props) => {
  return (
    <div className={styles['form-actions']}>
      <div className={styles['meal-qty-btns']}>
        <Button
          onClick={props.onIncrement}
          type='button'
          className={styles['inc-btn']}
        >
          +
        </Button>
        <Button
          onClick={props.onDecrement}
          type='button'
          className={styles['dec-btn']}
        >
          -
        </Button>
      </div>
      <Button type='submit' className={styles['submit-btn']}>
        Add
      </Button>
    </div>
  )
}

export default FormActions
