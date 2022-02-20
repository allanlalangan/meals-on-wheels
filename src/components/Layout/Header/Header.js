import React from 'react'
import styles from './Header.module.css'
import Button from '../../UI/Button'

const Header = props => {
  return (
    <header className={styles.header}>
      <h1>Meals on Wheels</h1>
      <Button>Cart</Button>
    </header>
  )
}

export default Header
