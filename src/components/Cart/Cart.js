import React, { useContext } from 'react'
import CartContext from '../store/cartContext'
import Modal from '../UI/Modal'
import CartItem from './CartItem'
import Button from '../UI/Button'
import OrderSubtotal from './OrderSubtotal'
import CheckoutForm from './CheckoutForm'
import styles from './Cart.module.css'

const Cart = (props) => {
  const cartContext = useContext(CartContext)
  const cartItems = cartContext.items

  return (
    <Modal onBackdropClick={props.onClose}>
      <section className={styles.container}>
        <ul className={styles['cart-items']}>
          {cartItems.map((item) => {
            return (
              <CartItem
                item={item}
                id={item.id}
                key={item.id}
                name={item.name}
                price={item.price}
                qty={item.qty}
                totalPrice={item.price * item.qty}
              />
            )
          })}
        </ul>
        <div className={styles['cart-actions']}>
          <Button className={styles['resume-btn']} onClick={props.onClose}>
            Resume Order
          </Button>
          <OrderSubtotal />
          <CheckoutForm />
        </div>
      </section>
    </Modal>
  )
}

export default Cart
