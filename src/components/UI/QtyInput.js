import React, { useState } from 'react'
import Button from './Button'
import styles from './QtyInput.module.css'

const QtyInput = React.forwardRef((props, ref) => {
  const handleKeyPress = e => {
    if (e.keyCode === 37 || e.keyCode === 40) {
      props.onDecrement()
    }
    if (e.keyCode === 38 || e.keyCode === 39) {
      props.onIncrement()
    }
  }

  return (
    <div className={styles['qty-select']}>
      <label htmlFor='quantity'>Qty</label>
      <input
        ref={ref}
        className={styles.input}
        id='quantity'
        name='quantity'
        type='number'
        value={props.value}
        // onChange={}
        step='1'
        min='1'
        max='5'
        onKeyDown={handleKeyPress}
      />
      <Button onClick={props.onDecrement} type='button'>
        -
      </Button>
      <Button onClick={props.onIncrement} type='button'>
        +
      </Button>
    </div>
  )
})

export default QtyInput
