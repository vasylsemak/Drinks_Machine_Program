import React from 'react'

const Coin = ({ name, quantity, coinsInput, handleChange }) => {
  return (
    <div className='coin'>
      <h2>{name}: {quantity}</h2>
      <input
        type='number'
        name={name.toLowerCase()}
        value={coinsInput[name.toLowerCase()]}
        placeholder='0'
        onChange={handleChange}
      />
    </div>
  )

}

export default Coin
