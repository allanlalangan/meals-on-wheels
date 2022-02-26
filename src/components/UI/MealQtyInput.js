import React from 'react'
import Button from './Button'
import styles from './MealQtyInput.module.css'

const MealQtyInput = React.forwardRef((props, ref) => {
  const handleKeyPress = e => {
    if (e.keyCode === 37 || e.keyCode === 40) {
      props.onDecrement()
    }
    if (e.keyCode === 38 || e.keyCode === 39) {
      props.onIncrement()
    }
  }

  return (
    <div className={styles['meal-qty']}>
      <div className={styles['input-control']}>
        <label htmlFor='quantity' className={styles.label}>
          Qty
        </label>
        <input
          ref={ref}
          className={styles.input}
          id='quantity'
          name='quantity'
          type='number'
          value={props.value}
          onChange={() => console.log('qty-changed')}
          step='1'
          min='1'
          max='5'
          onKeyDown={handleKeyPress}
        />
      </div>
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
    </div>
  )
})

export default MealQtyInput
