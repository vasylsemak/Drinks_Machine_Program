import React from 'react'
import { connect } from 'react-redux'
import { setOrderClicked } from '../store/actions'


const OrderDisconected = props => {
  // State
  const {
    totalCentsMachine,
    coinsInputSum,
    orderTotalCents,
    isOrderClicked
  } = props.allState
  // Actions
  const { setOrderClicked } = props

  function handleClick(evt) {
    evt.preventDefault()

    // set isOrderClicked top false
    setOrderClicked(isOrderClicked)

    // check if enough money inserted
    if(coinsInputSum < orderTotalCents) {
      alert('Your balance is low!')
      return
    }
  }

  // console.log('AllState', props.allState)

  return (
    <div className='order'>
      <h2>ORDER TOTAL:<span className='order-total'>{orderTotalCents}</span>cents</h2>
      <button
        disabled={!orderTotalCents}
        className='btn-get-drinks'
        onClick={handleClick}
      >GET DRINKS</button>
    </div>
  )
}

const mapStateToProps = state => ({
  allState: state
})

const mapDispatchToProps = dispatch => ({
  setOrderClicked: drinks => dispatch(setOrderClicked(drinks))
})

const Order = connect(mapStateToProps, mapDispatchToProps)(OrderDisconected)
export default Order
