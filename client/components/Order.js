import React from 'react'
import { connect } from 'react-redux'
import PurchaseModal from './PurchaseModal'
import { setOrderClicked, setChangeCents } from '../store/actions'


const OrderDisconected = props => {
  // State
  const {
    coinsInputSum,
    orderTotalCents,
    isOrderClicked,
  } = props.allState
  // Actions
  const { setOrderClicked, setChangeCents } = props

  function handleClick(evt) {
    evt.preventDefault()

    // check if enough money inserted
    if(coinsInputSum < orderTotalCents) {
      alert('Your balance is low! Please add more coins')
      return
    }

    // find if any change has to be released
    let change = coinsInputSum - orderTotalCents
    if(change) {
      setChangeCents(change)
    }

    // activate
    setOrderClicked(isOrderClicked)
  }

  // console.log('AllState', props.allState)
  return (
    <div className='order'>
      <PurchaseModal />
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
  setOrderClicked: drinks => dispatch(setOrderClicked(drinks)),
  setChangeCents: centsNum => dispatch(setChangeCents(centsNum))
})

const Order = connect(mapStateToProps, mapDispatchToProps)(OrderDisconected)
export default Order
