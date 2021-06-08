import React from 'react'
import { Coin } from './index'

const AllCoins = () => (
  <React.Fragment>
    <h2>COINS INFORMATION</h2>
    <div className='all-coins'>
      <Coin />
      <Coin />
      <Coin />
    </div>
  </React.Fragment>
)

export default AllCoins
