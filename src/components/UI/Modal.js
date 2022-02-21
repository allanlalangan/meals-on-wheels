import React from 'react'
import ReactDOM from 'react-dom'
import styles from './Modal.module.css'

const ModalBackdrop = props => {
  return <div className={styles.backdrop}></div>
}

const ModalWindow = props => {
  return <aside className={styles.window}>{props.children}</aside>
}

const portalToElement = document.getElementById('modal')

const Modal = props => {
  return (
    <>
      {ReactDOM.createPortal(<ModalBackdrop />, portalToElement)}
      {ReactDOM.createPortal(
        <ModalWindow>{props.children}</ModalWindow>,
        portalToElement
      )}
    </>
  )
}

export default Modal
