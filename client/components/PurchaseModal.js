import React from 'react'
import { connect } from 'react-redux'

const PurchaseModalDisconected = props => {
  const { allState } = props
  const { productsOrder, orderTotalCents, isOrderClicked, changeCents } = allState
  const productsArr = Object.entries(productsOrder)
  console.log('productsArr ', productsArr)

  const toggleClass = isOrderClicked ? "modal display-block" : "modal display-none"

  return (
    <div className={toggleClass}>
      <section className="modal-main">
        <h3> YOUR ORDER</h3>
        <ul>
          {
            productsArr.map((p, i) => (
              <li key={i}>{p[0]}: {p[1]}</li>
            ))
          }
        </ul>
        <h2>Total: {orderTotalCents} cents</h2>
        <h3> Your change: {changeCents} cents</h3>
        <button type="button" >
        {/* onClick={handleClose} */}
          Close
        </button>
      </section>
    </div>
  );
};

const mapStateToProps = state => ({ allState: state })

const PurchaseModal =
  connect(mapStateToProps)(PurchaseModalDisconected)

export default PurchaseModal
