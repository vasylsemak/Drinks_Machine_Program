import React from 'react'
import { connect } from 'react-redux'
import { PurchaseModal } from './index.js'
import { setShowModal, setChangeCents } from '../store/actions'


const OrderDisconected = props => {
  const {
    coinsInput,
    orderTotalCents,
    showModal,
  } = props.allState
  const { coinsInputSum } = coinsInput
  const { toggleShowModal, changeCents } = props

  function handleClick(evt) {
    evt.preventDefault()

    // check if enough money inserted
    if(coinsInputSum < orderTotalCents) {
      alert('Your balance is low! Please add more coins')
      return
    }
    // find if any change has to be released
    let change = coinsInputSum - orderTotalCents
    if(change) changeCents(change)
    // activate
    toggleShowModal(showModal)
  }

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

const mapStateToProps = state => ({ allState: state })

const mapDispatchToProps = dispatch => ({
  toggleShowModal: show => dispatch(setShowModal(show)),
  changeCents: centsNum => dispatch(setChangeCents(centsNum))
})

const Order =
  connect(mapStateToProps, mapDispatchToProps)(OrderDisconected)

export default Order
