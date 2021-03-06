import React, { useState } from 'react'

import CartContextProvider from './components/store/CartContextProvider'
import Header from './components/Layout/Header/Header'
import Cart from './components/Cart/Cart'
import Meals from './components/Meals/Meals'

function App() {
  const [cartIsOpen, setCartIsOpen] = useState(false)

  const handleCloseCart = () => {
    setCartIsOpen(false)
  }

  const handleOpenCart = () => {
    setCartIsOpen(true)
  }

  return (
    <CartContextProvider>
      <Header onOpenCart={handleOpenCart} />
      <main>
        {cartIsOpen && <Cart onClose={handleCloseCart} />}
        <Meals />
      </main>
    </CartContextProvider>
  )
}

export default App
