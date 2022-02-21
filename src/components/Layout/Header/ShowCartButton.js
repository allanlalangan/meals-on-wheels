import React from 'react'

const ShowCartButton = props => {
  return (
    <button onClick={props.onClick}>
      <span>Your Cart</span>
      <span>3</span>
    </button>
  )
}

export default ShowCartButton
