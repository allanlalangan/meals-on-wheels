import React, { useContext } from 'react'
import CartContext from '../store/cartContext'
import Modal from '../UI/Modal'
import Button from '../UI/Button'
import styles from './Cart.module.css'

const Cart = props => {
  const cartContext = useContext(CartContext)
  const cartItems = cartContext.items
  return (
    <Modal onBackdropClick={props.onClose}>
      <section className={styles.container}>
        <ul className={styles.cartItems}>{/* map cart items here */}</ul>
        <p>Total: $19.99</p>
        <button onClick={props.onClose}>Resume Order</button>
        <button>Order</button>
      </section>
    </Modal>
  )
}

export default Cart
