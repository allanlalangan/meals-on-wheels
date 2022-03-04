import React, { useState, useContext, useRef } from 'react'
import styles from './MealForm.module.css'
import MealQtyInput from '../UI/MealQtyInput'
import CartContext from '../store/cartContext'
import FormActions from './FormActions'

const MealForm = (props) => {
  const [qtyInputState, setQtyInputState] = useState(0)
  const cartContext = useContext(CartContext)

  const qtyInputRef = useRef()

  const inputChangeHandler = (e) => {
    setQtyInputState(e.target.value)
  }

  const decrementQty = () => {
    if (qtyInputState <= 1) {
      return qtyInputState
    }
    setQtyInputState((prevState) => +prevState - 1)
  }

  const incrementQty = () => {
    if (qtyInputState >= 5) {
      return qtyInputState
    }
    setQtyInputState((prevState) => +prevState + 1)
  }

  const handleAddMealToCart = (e) => {
    e.preventDefault()
    let enteredQty = +qtyInputRef.current.value

    const newCartItem = {
      id: props.id,
      name: props.name,
      price: props.price,
      qty: enteredQty,
    }
    cartContext.addItem(newCartItem)
    setQtyInputState(0)
  }

  return (
    <form className={styles['meal-form']} onSubmit={handleAddMealToCart}>
      <MealQtyInput
        ref={qtyInputRef}
        label='quantity'
        value={qtyInputState}
        onChange={inputChangeHandler}
      />
      <FormActions onIncrement={incrementQty} onDecrement={decrementQty} />
    </form>
  )
}

export default MealForm
