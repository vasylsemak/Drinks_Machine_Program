import React from 'react'
import { initialState } from '../store/reducer'
const { totalCentsOrder } = initialState

// console.log('actionTypes ', actionTypes)

const Order = () => (
  <div className='order'>
    <h4>ORDER TOTAL:  {totalCentsOrder} cents</h4>
    <button>GET DRINKS</button>
  </div>
)

export default Order
