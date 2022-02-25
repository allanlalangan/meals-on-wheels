import React, { useState, useContext, useReducer, useRef } from 'react'
import Button from '../UI/Button'
import styles from './MealForm.module.css'
import Input from '../UI/QtyInput'
import CartContext from '../store/cartContext'

const MealForm = props => {
  const qtyInputRef = useRef()
  const cartContext = useContext(CartContext)
  const cartItems = cartContext.items

  const handleAdd = e => {
    e.preventDefault()
    const enteredQty = +qtyInputRef.current.value

    const cartItem = {
      name: props.name,
      price: props.price,
      qty: enteredQty,
    }
    props.onAddMeal(cartItem)
  }

  return (
    <div>
      <form className={styles['meal-form']} onSubmit={handleAdd}>
        <Input ref={qtyInputRef} label='quantity' />
        <Button type='submit'>Add</Button>
      </form>
    </div>
  )
}

export default MealForm
