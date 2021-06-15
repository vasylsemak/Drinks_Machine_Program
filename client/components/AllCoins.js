import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Coin } from './index.js'
import { totalCentsMachine } from '../helper_functions'
import { setCoinsInput, setTotalCentsMachine } from '../store/actions'

class AllCoinsDisconected extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.handleCoinsChange = this.handleCoinsChange.bind(this)
  }

  componentDidMount() {
    const { setTotalCents, allCoinsMachine } = this.props
    let cents = totalCentsMachine(allCoinsMachine)
    setTotalCents(cents)
  }

  handleCoinsChange(event) {
    const newKey = event.target.name.toLowerCase()
    const newValue = event.target.value

    if(newValue < 0) {
      alert('Please insert 1 or more coins!')
      return
    }

    const { setCoinsInput } = this.props
    setCoinsInput([ newKey, newValue ])
  }

  render() {
    const { allCoinsMachine, totalCentsMachine, coinsInput } = this.props

    return (
      <Fragment>
        <h2>COINS INFORMATION</h2>
        <div className='coins-container'>
          <h2>CENTS<span className='total-cents'>{totalCentsMachine}</span></h2>
          <div className='all-coins'>
            {allCoinsMachine.map(coin =>
              <Coin
                key={coin.idValue}
                {...coin}
                coinsInput={coinsInput}
                handleChange={this.handleCoinsChange}
              />
            )}
          </div>
          <h3>Amount Inserted<span className='total-cents'>
            {coinsInput.coinsInputSum}
          </span></h3>
        </div>
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  allCoinsMachine: state.allCoinsMachine,
  totalCentsMachine: state.totalCentsMachine,
  coinsInput: state.coinsInput,
})

const mapDispatchToProps = dispatch => ({
  setTotalCents: centsNum => dispatch(setTotalCentsMachine(centsNum)),
  setCoinsInput: coinsObj => dispatch(setCoinsInput(coinsObj)),
})

const AllCoins = connect(mapStateToProps, mapDispatchToProps)(AllCoinsDisconected)
export default AllCoins
