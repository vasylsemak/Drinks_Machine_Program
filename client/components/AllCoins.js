import React, { Component, Fragment } from 'react'
import { Coin } from './index.js'
import initialState from '../store/reducer'
import { countSumCoins } from '../helper_functions'

const coinsInput = {
  penny: '',
  nickel: '',
  dime: '',
  quater: ''
}

class AllCoins extends Component {
  constructor(props) {
    super(props)
    this.state = {
      coinsInput,
      sumCoins: 0
    }
    this.handleCoinsChange = this.handleCoinsChange.bind(this)
  }

  handleCoinsChange(event) {
    this.setState(state => {
      // extract key/value pairs from input
      const newKey = event.target.name.toLowerCase()
      const newValue = event.target.value
      // create object of coins inserted
      const newCoinsInput = { ...state.coinsInput, [newKey]: newValue }
      //utilize helper function to calculate all coins inserted in cents
      const newSumCoins = countSumCoins(newCoinsInput)
      // return new state with updated properties
      return { ...state, coinsInput: newCoinsInput, sumCoins: newSumCoins }
    })
  }

  render() {
    const { allCoins, totalCents } = initialState
    const { sumCoins } = this.state

    return (
      <Fragment>
        <h2>COINS INFORMATION</h2>
        <div className='coins-container'>
          <h3>CENTS<span className='total-cents'>{totalCents}</span></h3>
          <div className='all-coins'>
            {allCoins.map(coin =>
              <Coin
                key={coin.idValue}
                {...coin}
                coinsInput={this.state.coinsInput}
                handleChange={this.handleCoinsChange}
              />
            )}
          </div>
          <h3>Amount Inserted<span className='total-cents'>{sumCoins}</span></h3>
        </div>
      </Fragment>
    )
  }
}

export default AllCoins
