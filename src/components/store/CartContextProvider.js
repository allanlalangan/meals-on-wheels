import React, { useReducer } from 'react'
import CartContext from './cartContext'

const defaultCartState = {
  items: [],
  totalPrice: 0,
}

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      return
    case 'REMOVE':
      return
    default:
      throw new Error()
  }
}

const CartContextProvider = props => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  )

  const handleAddItem = item => {
    dispatchCartAction({ type: 'ADD', payload: item })
  }
  const handleRemoveItem = id => {
    dispatchCartAction({ type: 'REMOVE', payload: id })
  }

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
