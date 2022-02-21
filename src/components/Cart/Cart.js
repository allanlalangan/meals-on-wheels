import React from 'react'
import Modal from '../UI/Modal'
import Button from '../UI/Button'
import styles from './Cart.module.css'

const Cart = props => {
  return (
    <Modal>
      <section className={styles.container}>
        <ul className={styles.cartItems}>{/* map cart items here */}</ul>
        <p>Total: $9.99</p>
        <button onClick={props.onCloseCart}>Resume Order</button>
        <button>Order</button>
      </section>
    </Modal>
  )
}

export default Cart
