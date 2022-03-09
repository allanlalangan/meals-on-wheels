import React, { useContext } from 'react'
import CartContext from '../store/cartContext'
import Button from '../UI/Button'
import styles from './OrderSubtotal.module.css'

const OrderSubtotal = (props) => {
  const cartContext = useContext(CartContext)
  const cartItems = cartContext.items
  const handleCheckout = (e) => {
    // e.preventDefault()
    console.log(cartItems)
  }
  return (
    <div className={styles['order-subtotal']}>
      <h1 className={styles['cart-total-price']}>
        {cartItems.length === 0
          ? 'Cart is empty'
          : `Total: $${cartItems
              .reduce((total, item) => total + item.price * item.qty, 0)
              .toFixed(2)}`}
      </h1>
      {cartItems.length >= 1 && (
        <Button
          onClick={handleCheckout}
          className={styles['order-btn']}
          type='submit'
        >
          Checkout
        </Button>
      )}
    </div>
  )
}

export default OrderSubtotal
