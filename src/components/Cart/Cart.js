import React, { useContext } from 'react'
import CartContext from '../store/cartContext'
import Modal from '../UI/Modal'
import CartItem from './CartItem'
import Button from '../UI/Button'
import styles from './Cart.module.css'

const Cart = props => {
  const cartContext = useContext(CartContext)
  const cartItems = cartContext.items
  return (
    <Modal onBackdropClick={props.onClose}>
      <section className={styles.container}>
        <ul className={styles.cartItems}>
          {cartItems.map(item => {
            return (
              <li>
                <CartItem name={item.name} price={item.price} qty={item.qty} />
              </li>
            )
          })}
        </ul>
        <p>Total: $19.99</p>
        <button onClick={props.onClose}>Resume Order</button>
        <button>Order</button>
      </section>
    </Modal>
  )
}

export default Cart
