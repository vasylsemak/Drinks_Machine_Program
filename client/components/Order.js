import React from 'react'
import { useSelector } from 'react-redux'

const Order = () => {
  const orderTotal = useSelector(state => state.orderTotalCents)

  return (
    <div className='order'>
      <h2>ORDER TOTAL:<span className='order-total'>{orderTotal}</span>cents</h2>
      <button>GET DRINKS</button>
    </div>
  )
}

export default Order
