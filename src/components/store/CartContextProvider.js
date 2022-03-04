import React, { useReducer } from 'react'
import CartContext from './cartContext'

const defaultCartState = {
  items: [],
  totalPrice: 0,
}

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD': //DISPATCH ACTION
      let updatedQty
      let updatedItem
      let updatedCart

      const existingCartItemIndex = state.items.findIndex(
        (item) => item.name === action.item.name
      )
      const existingCartItem = state.items[existingCartItemIndex]

      if (existingCartItem && existingCartItem.qty + action.item.qty < 5) {
        updatedQty = existingCartItem.qty + action.item.qty
        updatedItem = {
          ...existingCartItem,
          qty: updatedQty,
        }
        updatedCart = [...state.items]
        updatedCart[existingCartItemIndex] = updatedItem
      } else if (
        existingCartItem &&
        existingCartItem.qty + action.item.qty >= 5
      ) {
        updatedQty = 5
        updatedItem = {
          ...existingCartItem,
          qty: updatedQty,
        }
        updatedCart = [...state.items]
        updatedCart[existingCartItemIndex] = updatedItem
      } else {
        updatedCart = state.items.concat(action.item)
      }

      return {
        items: updatedCart,
      }

    case 'REMOVE': //DISPATCH ACTION
      // console.log(action.id)
      const updatedCartRemoveItem = state.items.filter(
        (item) => item.id !== action.id
      )
      return {
        items: updatedCartRemoveItem,
      }

    case 'CART_ITEM_QTY_ADD': //DISPATCH ACTION
      const cartAddItemQtyIndex = state.items.findIndex(
        (item) => item.name === action.item.name
      )
      if (action.item.qty < 5) {
        const updatedCartAddItemQty = (action.item.qty += 1)
        const updatedCartAddItem = {
          ...action.item,
          qty: updatedCartAddItemQty,
        }
        const updatedCartAddQty = [...state.items]
        updatedCartAddQty[cartAddItemQtyIndex] = updatedCartAddItem
        return {
          items: updatedCartAddQty,
        }
      } else {
        return state
      }

    case 'CART_ITEM_QTY_SUB': //DISPATCH ACTION
      const cartSubItemQtyIndex = state.items.findIndex(
        (item) => item.name === action.item.name
      )
      if (action.item.qty > 1) {
        const updatedCartSubItemQty = (action.item.qty -= 1)
        const updatedCartSubItem = {
          ...action.item,
          qty: updatedCartSubItemQty,
        }
        const updatedCartSubQty = [...state.items]
        updatedCartSubQty[cartSubItemQtyIndex] = updatedCartSubItem
        return {
          items: updatedCartSubQty,
        }
      } else {
        return state
      }

    default:
      return state
  }
}

const CartContextProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  )

  const handleAddItem = (item) => {
    dispatchCartAction({ type: 'ADD', item: item })
  }
  const handleRemoveItem = (id) => {
    dispatchCartAction({ type: 'REMOVE', id: id })
  }

  const handleAddCartItemQty = (item) => {
    dispatchCartAction({ type: 'CART_ITEM_QTY_ADD', item: item })
  }

  const handleSubCartItemQty = (item) => {
    dispatchCartAction({ type: 'CART_ITEM_QTY_SUB', item: item })
  }

  const cartContext = {
    items: cartState.items,
    totalPrice: cartState.totalPrice,
    addItem: handleAddItem,
    removeItem: handleRemoveItem,
    addCartItemQty: handleAddCartItemQty,
    subCartItemQty: handleSubCartItemQty,
  }

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  )
}

export default CartContextProvider
