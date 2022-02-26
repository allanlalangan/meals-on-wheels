import React, { useState } from 'react'

import CartContextProvider from './components/store/CartContextProvider'
import Header from './components/Layout/Header/Header'
import Cart from './components/Cart/Cart'
import Meals from './components/Meals/Meals'

function App() {
  const [cartIsOpen, setCartIsOpen] = useState(false)

  const handleCloseCart = () => {
    setCartIsOpen(false)
    console.log('modal closed')
  }

  const handleOpenCart = () => {
    setCartIsOpen(true)
    console.log('modal opened')
  }

  return (
    <CartContextProvider>
      {cartIsOpen && <Cart onClose={handleCloseCart} />}
      <Header onOpenCart={handleOpenCart} />
      <main>
        <Meals />
      </main>
    </CartContextProvider>
  )
}

export default App
