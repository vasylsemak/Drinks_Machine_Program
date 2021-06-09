import React, { Component, Fragment } from 'react'
import { Coin } from './index'
import initialState from '../store/reducer'

const { allCoins, totalCents } = initialState

class AllCoins extends Component {
  constructor(props) {
    super(props)
    this.state = {
      coinsInput: {
        penny: '',
        nickel: '',
        dime: '',
        quater: ''
      },
      sumCoins: 0,
      change: 0,
    }
    this.handleCoinsChange = this.handleCoinsChange.bind(this)
  }

  handleCoinsChange(event) {
    this.setState(state => {
      const newKey = event.target.name.toLowerCase()
      let newValue = event.target.value

      const newCoinsInput = { ...state.coinsInput, [newKey]: newValue }
      const updatedState = { ...state, coinsInput: newCoinsInput }

      console.log('---> ', newCoinsInput)
      return updatedState
    })
  }

  render() {

    return (
      <Fragment>
        <h2>COINS INFORMATION</h2>
        <div className='coins-container'>
          <h3>CENTS<div className='total-cents'>{totalCents}</div></h3>
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
        </div>
      </Fragment>
    )
  }
}

export default AllCoins
