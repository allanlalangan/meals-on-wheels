import React, { useContext } from 'react'
import CartContext from '../../store/cartContext'
import styles from './ShowCartButton.module.css'

const ShowCartButton = props => {
  const cartContext = useContext(CartContext)
  const cartItemTotal = cartContext.items.reduce(
    (total, item) => total + item.qty,
    0
  )
  const handleOpenCart = () => {
    console.log(cartContext.items)
    props.onClick()
  }
  return (
    <button className={styles['cart-btn']} onClick={handleOpenCart}>
      <span className={styles['btn-info']}>Your Cart</span>
      <span className={styles['cart-qty']}>
        {cartItemTotal > 0 && cartItemTotal}
      </span>
    </button>
  )
}

export default ShowCartButton
