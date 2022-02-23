import React, { useContext } from 'react'
import CartContext from '../../store/cartContext'

const ShowCartButton = props => {
  const cartContext = useContext(CartContext)
  return (
    <button onClick={props.onClick}>
      <span>Your Cart</span>
      <span>3</span>
    </button>
  )
}

export default ShowCartButton
