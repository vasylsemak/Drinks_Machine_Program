import React from 'react'
import { AllProducts, Order } from './index.js'

const ProductsInfo = () => (
  <React.Fragment>
    <h2>PRODUCTS INFORMATION</h2>
    <div className='products-info'>
      <AllProducts />
      <Order />
    </div>
  </React.Fragment>
)

export default ProductsInfo
