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
              <li key={item.id}>
                <CartItem
                  item={item}
                  id={item.id}
                  name={item.name}
                  price={item.price}
                  qty={item.qty}
                  totalPrice={item.price * item.qty}
                />
              </li>
            )
          })}
        </ul>
        <p>
          {cartItems.length === 0
            ? 'Cart is empty'
            : `Total: $${cartItems.reduce(
                (total, item) => total + item.price * item.qty,
                0
              )}`}
        </p>
        <Button onClick={props.onClose}>Resume Order</Button>
        {cartItems.length >= 1 && <Button>Order</Button>}
      </section>
    </Modal>
  )
}

export default Cart
