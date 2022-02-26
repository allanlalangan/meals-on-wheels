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
        <ul className={styles['cart-items']}>
          {cartItems.map(item => {
            return (
              <CartItem
                item={item}
                id={item.id}
                name={item.name}
                price={item.price}
                qty={item.qty}
                totalPrice={item.price * item.qty}
              />
            )
          })}
        </ul>
        <section className={styles['cart-actions']}>
          <Button className={styles['resume-btn']} onClick={props.onClose}>
            Resume Order
          </Button>
          <div className={styles['order-summary']}>
            <h1 className={styles['cart-total-price']}>
              {cartItems.length === 0
                ? 'Cart is empty'
                : `Total: $${cartItems
                    .reduce((total, item) => total + item.price * item.qty, 0)
                    .toFixed(2)}`}
            </h1>
            {cartItems.length >= 1 && (
              <Button className={styles['order-btn']} type='button'>
                Place Order
              </Button>
            )}
          </div>
        </section>
      </section>
    </Modal>
  )
}

export default Cart
