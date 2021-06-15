import React from 'react'
import { connect } from 'react-redux'
import { clearProductsOrder } from '../helper_functions'
import {
  clearCoinsInput,
  setTotalCentsMachine,
  setProductsOrder,
  updateProducts,
  setShowModal
} from '../store/actions'

const PurchaseModalDisconected = props => {
  const {
    totalCentsMachine,
    productsOrder,
    showModal,
    changeCents
  } = props.allState

  const {
    setTotalCents,
    clearCoinsInput,
    setProductsOrder,
    updateProducts,
    toggleShowModal
  } = props

  const { orderTotalCents } = productsOrder

  const productsArr = Object
    .entries(productsOrder)
    .filter(p => p[0] !== 'orderTotalCents')

  const toggleClass = showModal
    ? "modal display-block"
    : "modal display-none"

  const handleSubmit = () => {
    toggleShowModal(showModal)
    updateProducts(productsOrder)
    setTotalCents(totalCentsMachine + orderTotalCents)
    // clear coins input
    clearCoinsInput()
    // clear products input
    const clearedOrderObj = clearProductsOrder(productsOrder) // !!!!!
    setProductsOrder(clearedOrderObj)
  }

  return (
    <div className={toggleClass}>
      <section className="modal-main">
        <h3> YOUR ORDER</h3>
        <ul>
          {productsArr.map((p, i) => (
              <li key={i}>{p[0]}: {p[1]}</li>
          ))}
        </ul>
        <h2>Total: {orderTotalCents} cents</h2>
        <h3> Your change: {changeCents} cents</h3>
        <button type="button" onClick={handleSubmit}>
          Submit Purchase
        </button>
      </section>
    </div>
  );
};

const mapStateToProps = state => ({ allState: state })

const mapDispatchToProps = dispatch => ({
  setTotalCents: centsNum => dispatch(setTotalCentsMachine(centsNum)),
  clearCoinsInput: () => dispatch(clearCoinsInput()),
  setProductsOrder: orderObj => dispatch(setProductsOrder(orderObj)),
  updateProducts: orderObj => dispatch(updateProducts(orderObj)),
  toggleShowModal: show => dispatch(setShowModal(show))
})

const PurchaseModal =
  connect(mapStateToProps, mapDispatchToProps)(PurchaseModalDisconected)

export default PurchaseModal
