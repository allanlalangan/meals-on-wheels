import React from 'react'
import CartContext from './cartContext'

const CartContextProvider = props => {
  const handleAddItem = item => {}
  const handleRemoveItem = id => {}

  const cartContext = {
    items: [],
    totalPrice: 0,
    addItem: handleAddItem,
    removeItem: handleRemoveItem,
  }

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  )
}

export default CartContextProvider
