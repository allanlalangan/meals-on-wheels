import React, { useReducer } from 'react'
import CartContext from './cartContext'

const defaultCartState = {
  items: [],
  totalPrice: 0,
}

const cartReducer = (state, action) => {
  switch (action.type) {
    default:
      throw new Error()
  }
}

const CartContextProvider = props => {
  const [cartState, cartDispatch] = useReducer(cartReducer, defaultCartState)

  const handleAddItem = item => {}
  const handleRemoveItem = id => {}

  const cartContext = {
    items: cartState.items,
    totalPrice: cartState.totalPrice,
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
