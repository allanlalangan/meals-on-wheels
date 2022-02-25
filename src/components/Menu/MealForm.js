import React, { useState, useContext, useReducer, useRef } from 'react'
import Button from '../UI/Button'
import styles from './MealForm.module.css'
import CartContext from '../store/cartContext'
import Input from '../UI/QtyInput'

const MealForm = props => {
  const cartContext = useContext(CartContext)
  const qtyInputRef = useRef()

  // const decrement = e => {
  //   console.log('decrement-btn')
  // }

  // const increment = e => {
  //   console.log('increment-btn')
  // }

  const handleAdd = e => {
    e.preventDefault()
    const enteredQty = qtyInputRef.current.value
    const enteredQtyNumber = +enteredQty
    console.log(enteredQtyNumber)
    console.log(props.name, props.price)
  }

  return (
    <div>
      <form onSubmit={handleAdd}>
        <Input ref={qtyInputRef} label='quantity' />
        <Button type='submit'>Add</Button>
      </form>
    </div>
  )
}

export default MealForm
