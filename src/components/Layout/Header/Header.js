import React from 'react'
import ShowCartButton from './ShowCartButton'
import styles from './Header.module.css'

const Header = props => {
  return (
    <header className={styles.header}>
      <h1>Meals On Wheels</h1>
      <ShowCartButton onClick={props.onOpenCart} />
    </header>
  )
}

export default Header
