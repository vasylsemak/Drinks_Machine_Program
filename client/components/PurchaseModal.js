import React from 'react'
import { connect } from 'react-redux'
import { setShowModal } from '../store/actions'

const PurchaseModalDisconected = props => {
  const {
    productsOrder,
    orderTotalCents,
    showModal,
    changeCents
  } = props.allState
  const { toggleShowModal } = props

  const productsArr = Object.entries(productsOrder)

  const toggleClass = showModal
    ? "modal display-block"
    : "modal display-none"

  const handleSubmit = () => {
    toggleShowModal(showModal)
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
  toggleShowModal: show => dispatch(setShowModal(show))
})

const PurchaseModal =
  connect(mapStateToProps, mapDispatchToProps)(PurchaseModalDisconected)

export default PurchaseModal
