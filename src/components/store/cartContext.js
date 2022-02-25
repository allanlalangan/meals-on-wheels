import React from 'react'

const CartContext = React.createContext({
  items: [],
  totalPrice: 0,
  addItem: item => {},
  removeItem: id => {},
  addCartItemQty: item => {},
  subCartItemQty: item => {},
})

export default CartContext
