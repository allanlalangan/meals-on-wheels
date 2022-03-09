import React from 'react'

const CheckoutForm = () => {
  return (
    <form>
      <label htmlFor='name'>Name</label>
      <input type='text' id='name' />
      <label htmlFor='phone'>Phone Number</label>
      <input type='text' id='phone' />
      <label htmlFor='address'>Street Address</label>
      <input type='text' id='address' />
      <label htmlFor='unit'>Unit Number</label>
      <input type='text' id='unit' />
      <label htmlFor='zip'>Zipcode</label>
      <input type='text' id='zip' />
    </form>
  )
}

export default CheckoutForm
