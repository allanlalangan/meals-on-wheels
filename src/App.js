import React, { useState } from 'react'

import CartContextProvider from './components/store/CartContextProvider'
import Header from './components/Layout/Header/Header'
import Cart from './components/Cart/Cart'
import Menu from './components/Menu/Menu'

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
      <main>
        {cartIsOpen && <Cart onClose={handleCloseCart} />}
        <Header onOpenCart={handleOpenCart} />
        <Menu />
      </main>
    </CartContextProvider>
  )
}

export default App
