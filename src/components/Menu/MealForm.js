import React, { useState, useContext, useRef } from 'react'
import Button from '../UI/Button'
import styles from './MealForm.module.css'
import Input from '../UI/QtyInput'
import CartContext from '../store/cartContext'

const MealForm = props => {
  const [qtyInputState, setQtyInputState] = useState(1)
  const cartContext = useContext(CartContext)

  const decrement = () => {
    if (qtyInputState <= 1) {
      return qtyInputState
    }
    setQtyInputState(prevState => (prevState -= 1))
  }

  const increment = () => {
    if (qtyInputState >= 5) {
      return qtyInputState
    }
    setQtyInputState(prevState => (prevState += 1))
  }

  const qtyInputRef = useRef()

  const handleAdd = e => {
    e.preventDefault()
    const enteredQty = +qtyInputRef.current.value

    const cartItem = {
      name: props.name,
      price: props.price,
      qty: enteredQty,
    }
    cartContext.addItem(cartItem)
    setQtyInputState(1)
  }

  return (
    <div>
      <form className={styles['meal-form']} onSubmit={handleAdd}>
        <Input
          ref={qtyInputRef}
          label='quantity'
          value={qtyInputState}
          onIncrement={increment}
          onDecrement={decrement}
        />
        <Button type='submit'>Add</Button>
      </form>
    </div>
  )
}

export default MealForm
