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
      name={name}
      type='number'
      min='0' step='1'
      onChange={handleChange}
    />
  </div>
)


export default Product
