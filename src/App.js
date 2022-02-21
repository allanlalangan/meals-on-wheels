import React, { useState } from 'react'
import Cart from './components/Cart/Cart'
import Header from './components/Layout/Header/Header'
import Menu from './components/Menu/Menu'

function App() {
  const [cartIsOpen, setCartIsOpen] = useState(true)

  const handleCloseCart = () => {
    setCartIsOpen(false)
    console.log('modal closed')
  }

  const handleOpenCart = () => {
    setCartIsOpen(true)
    console.log('modal opened')
  }

  return (
    <>
      <main>
        {cartIsOpen && <Cart onCloseCart={handleCloseCart} />}
        <Header onOpenCart={handleOpenCart} />
        <Menu />
      </main>
    </>
  )
}

export default App
