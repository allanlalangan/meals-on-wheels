import React from 'react'
import Cart from './components/Cart/Cart'
import Header from './components/Layout/Header/Header'
import Menu from './components/Menu/Menu'

function App() {
  return (
    <div className='container'>
      <Header />
      <main>
        <Cart />
        <Menu />
      </main>
    </div>
  )
}

export default App
