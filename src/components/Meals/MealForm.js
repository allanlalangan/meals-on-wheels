import React, { useState, useContext, useRef } from 'react'
import Button from '../UI/Button'
import styles from './MealForm.module.css'
import MealQtyInput from '../UI/MealQtyInput'
import CartContext from '../store/cartContext'

const MealForm = (props) => {
  // const [qtyInputState, setQtyInputState] = useState(1)
  const cartContext = useContext(CartContext)

  const qtyInputRef = useRef()

  // const decrementQty = () => {
  //   if (qtyInputState <= 1) {
  //     return qtyInputState
  //   }
  //   setQtyInputState((prevState) => (prevState -= 1))
  // }

  // const incrementQty = () => {
  //   if (qtyInputState >= 5) {
  //     return qtyInputState
  //   }
  //   setQtyInputState((prevState) => (prevState += 1))
  // }

  const handleAdd = (e) => {
    e.preventDefault()
    let enteredQty = +qtyInputRef.current.value

    const cartItem = {
      id: props.id,
      name: props.name,
      price: props.price,
      qty: enteredQty,
    }
    cartContext.addItem(cartItem)
    // setQtyInputState(1)
  }

  return (
    <form className={styles['meal-form']} onSubmit={handleAdd}>
      <MealQtyInput
        ref={qtyInputRef}
        label='quantity'
        // value={qtyInputState}
        // onIncrement={incrementQty}
        // onDecrement={decrementQty}
      />
      <Button type='submit' className={styles['submit-btn']}>
        Add
      </Button>
    </form>
  )
}

export default MealForm
