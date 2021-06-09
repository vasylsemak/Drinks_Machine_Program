import React from 'react'

const Coin = ({ name, quantity, coinsInput, handleChange }) => {

  return (
    <div className='coin'>
      <h3>{name}: {quantity}</h3>
      <input
        name={name.toLowerCase()}
        value={coinsInput[name.toLowerCase()]}
        placeholder='quantity'
        onChange={handleChange}
      />
    </div>
  )

}

export default Coin
