import React, { useRef, useState } from 'react'
import Button from './Button'
import styles from './MealQtyInput.module.css'

const MealQtyInput = React.forwardRef((props, ref) => {
  return (
    <div className={styles['meal-qty']}>
      <div className={styles['input-control']}>
        <label htmlFor='qty' className={styles.label}>
          Qty
        </label>
        <input
          ref={ref}
          className={styles.input}
          id='qty'
          name='quantity'
          type='number'
          step='1'
          min='1'
          max='5'
          value={props.value}
          onChange={props.onChange}
        />
      </div>
      {/* <div className={styles['meal-qty-btns']}>
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
      </div> */}
    </div>
  )
})

export default MealQtyInput
