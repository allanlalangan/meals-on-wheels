import React from 'react'
import styles from './CartItem.module.css'

import Button from '../UI/Button'

const CartItem = props => {
  return (
    <div>
      <p>{props.name}</p>
      <p>{`Quantity: ${props.qty}`}</p>
      <p>{`$${props.price}`}</p>
      <p>{`Subtotal: $${props.totalPrice}`}</p>
      <Button type='button'>-</Button>
      <Button type='button'>+</Button>
      <Button>Remove</Button>
    </div>
  )
}

export default CartItem
