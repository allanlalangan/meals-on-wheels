import React from 'react'
import ReactDOM from 'react-dom'
import styles from './Modal.module.css'

const ModalBackdrop = props => {
  return <div className={styles.backdrop} onClick={props.onClick}></div>
}

const ModalWindow = props => {
  return <aside className={styles.window}>{props.children}</aside>
}

const portalToElement = document.getElementById('modal-root')

const Modal = props => {
  return (
    <>
      {ReactDOM.createPortal(
        <ModalBackdrop onClick={props.onBackdropClick} />,
        portalToElement
      )}
      {ReactDOM.createPortal(
        <ModalWindow>{props.children}</ModalWindow>,
        portalToElement
      )}
    </>
  )
}

export default Modal
