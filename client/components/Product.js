import React from 'react'

const Product = props => {
  const { name, cost, quantityAvailable, productsOrder, handleChange } = props

  const val = productsOrder[name.toLowerCase()] === undefined
    ? 0 : productsOrder[name.toLowerCase()]

  return (
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
        value={val}
        type='number'
        min='0' max={quantityAvailable} step='1'
        placeholder='0'
        onChange={handleChange}
        disabled={!quantityAvailable}
      />
    </div>
  )
}


export default Product
