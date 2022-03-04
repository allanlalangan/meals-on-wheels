import React, { useContext } from 'react'
import CartContext from '../store/cartContext'
import styles from './CartItem.module.css'

import MealQtyInput from '../UI/MealQtyInput'
import Button from '../UI/Button'

const CartItem = (props) => {
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
    <li className={styles['cart-item']}>
      <article className={styles['meal-info']}>
        <h1 className={styles['meal-name']}>{props.name}</h1>
        <input type='number' value={props.qty} />
        {/* <p
          className={props.qty === 1 ? `${styles.hidden}` : ''}
        >{`x${props.qty}`}</p> */}
      </article>
      <article className={styles['cart-item-subtotal']}>
        <p>{`$${props.price}`}</p>
        <p>{`Subtotal: $${props.totalPrice.toFixed(2)}`}</p>
      </article>
      <div className={styles['cart-item-controls']}>
        <div className={styles['cart-item-qty-controls']}>
          <Button
            onClick={handleQtySub}
            type='button'
            className={`${styles['qty-btn']} ${styles['dec-btn']}`}
          >
            -
          </Button>
          <Button
            onClick={handleQtyAdd}
            type='button'
            className={`${styles['qty-btn']} ${styles['inc-btn']}`}
          >
            +
          </Button>
        </div>
        <div className={styles['cart-item-rmv-control']}>
          <Button
            onClick={handleRemoveItem}
            type='button'
            className={styles['rmv-btn']}
          >
            Remove
          </Button>
        </div>
      </div>
    </li>
  )
}

export default CartItem
