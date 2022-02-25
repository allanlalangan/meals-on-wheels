import React, { useContext } from 'react'
import CartContext from '../store/cartContext'
import styles from './CartItem.module.css'

import Button from '../UI/Button'

const CartItem = props => {
  const cartContext = useContext(CartContext)

  const handleQtyAdd = () => {
    cartContext.addCartItemQty(props.item)
  }
  const handleQtySub = () => {
    cartContext.subCartItemQty(props.item)
  }
  const handleRemoveItem = () => {
    cartContext.removeItem(props.id)
  }

  return (
    <div>
      <p>{props.name}</p>
      <p>{`Quantity: ${props.qty}`}</p>
      <p>{`$${props.price}`}</p>
      <p>{`Subtotal: $${props.totalPrice}`}</p>
      <Button onClick={handleQtySub} type='button'>
        -
      </Button>
      <Button onClick={handleQtyAdd} type='button'>
        +
      </Button>
      <Button onClick={handleRemoveItem} type='button'>
        Remove
      </Button>
    </div>
  )
}

export default CartItem
