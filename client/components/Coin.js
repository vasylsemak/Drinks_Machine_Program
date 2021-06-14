import React from 'react'

const Coin = ({ name, quantity, coinsInput, handleChange }) => {
  return (
    <div className='coin'>
      <h2>{name}: {quantity}</h2>
      <input
        name={name.toLowerCase()}
        value={coinsInput[name.toLowerCase()]}
        placeholder='insert'
        onChange={handleChange}
      />
    </div>
  )

}

export default Coin
