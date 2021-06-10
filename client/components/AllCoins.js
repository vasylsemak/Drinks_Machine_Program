import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Coin } from './index.js'
import { totalCentsMachine, totalCentsInserted } from '../helper_functions'
import {
  setCoinsInput,
  setTotalCentsMachine,
  setCoinsInputSum
} from '../store/actions'


let coinsInput = {
  penny: '',
  nickel: '',
  dime: '',
  quater: ''
}

class AllCoinsDisconected extends Component {
  constructor(props) {
    super(props)
    this.state = coinsInput
    this.handleCoinsChange = this.handleCoinsChange.bind(this)
  }

  componentDidMount() {
    const { setTotalCents, allCoinsMachine } = this.props
    let cents = totalCentsMachine(allCoinsMachine)
    setTotalCents(cents)
  }

  componentDidUpdate() {
    const { setCoins, allCoinsMachine, setInputSum } = this.props
    let inputSum = totalCentsInserted(this.state)

    setCoins(allCoinsMachine)
    setInputSum(inputSum)
  }

  handleCoinsChange(event) {
    const newKey = event.target.name.toLowerCase()
    const newValue = event.target.value
    this.setState({ [newKey]: newValue })
  }

  render() {
    const { allCoinsMachine, totalCentsMachine, coinsInputSum } = this.props

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
                coinsInput={this.state}
                handleChange={this.handleCoinsChange}
              />
            )}
          </div>
          <h3>Amount Inserted<span className='total-cents'>{coinsInputSum}</span></h3>
        </div>
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  allCoinsMachine: state.allCoinsMachine,
  totalCentsMachine: state.totalCentsMachine,
  coinsInputSum: state.coinsInputSum

})

const mapDispatchToProps = dispatch => ({
  setTotalCents: centsNum => dispatch(setTotalCentsMachine(centsNum)),
  setCoins: coinsObj => dispatch(setCoinsInput(coinsObj)),
  setInputSum: sumNum => dispatch(setCoinsInputSum(sumNum))
})

const AllCoins = connect(mapStateToProps, mapDispatchToProps)(AllCoinsDisconected)
export default AllCoins
