import React from 'react'
import styles from './CartItem.module.css'

const CartItem = props => {
  return (
    <div>
      <p>{props.name}</p>
      <p>{props.price}</p>
      <p>{props.qty}</p>
    </div>
  )
}

export default CartItem
