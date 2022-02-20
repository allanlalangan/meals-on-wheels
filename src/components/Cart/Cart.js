import React from 'react'
import Button from '../UI/Button'
import styles from './Cart.module.css'

const Cart = () => {
  return (
    <section className={styles.container}>
      <ul className={styles.cartItems}>{/* map cart items here */}</ul>
      <p>Total: $9.99</p>
      <Button>Cancel</Button>
      <Button>Order</Button>
    </section>
  )
}

export default Cart
