import React, { useReducer } from 'react'
import CartContext from './cartContext'

const defaultCartState = {
  items: [],
  totalPrice: 0,
}

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      const currentCart = state.items
      const existingCartItemIndex = currentCart.findIndex(
        item => item.name === action.item.name
      )
      const existingCartItem = currentCart[existingCartItemIndex]

      let updatedItem
      let updatedCart
      let updatedQty

      if (existingCartItem) {
        updatedQty = existingCartItem.qty + action.item.qty
        updatedItem = {
          ...existingCartItem,
          qty: updatedQty,
        }
        updatedCart = [...currentCart]
        updatedCart[existingCartItemIndex] = updatedItem
      } else {
        updatedCart = currentCart.concat(action.item)
      }
      return {
        items: updatedCart,
      }
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
    dispatchCartAction({ type: 'ADD', item: item, id: item.id })
    console.log(cartState.items)
  }
  const handleRemoveItem = id => {
    dispatchCartAction({ type: 'REMOVE', id: id })
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
