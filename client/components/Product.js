import React from 'react'

const Product = ({ name, cost, quantityAvailable, handleChange }) => (
  <div className='product'>
    <div>
      <h2>{name}</h2>
      <div className='product-details'>
        <p>{quantityAvailable} drinks available,</p>
        <p>Cost = {cost}</p>
      </div>
    </div>
    <input
      className='product-input'
      name={name.toLowerCase()}
      type='number'
      min='0' max={quantityAvailable} step='1'
      placeholder='0'
      onChange={handleChange}
      disabled={!quantityAvailable}
    />
  </div>
)


export default Product
