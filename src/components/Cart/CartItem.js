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
    <>
      <p>{props.name}</p>
      {props.qty > 1 && <p>{`x${props.qty}`}</p>}
      <p>{`$${props.price}`}</p>
      <p>{`Subtotal: $${props.totalPrice}`}</p>
      <div className={styles['cart-item-controls']}>
        <div className={styles['cart-item-qty-control']}>
          {props.qty > 1 && (
            <Button onClick={handleQtySub} type='button'>
              -
            </Button>
          )}
          {props.qty < 5 && (
            <Button onClick={handleQtyAdd} type='button'>
              +
            </Button>
          )}
        </div>
        <div className={styles['cart-item-rmv-control']}>
          <Button onClick={handleRemoveItem} type='button'>
            Remove
          </Button>
        </div>
      </div>
    </>
  )
}

export default CartItem
