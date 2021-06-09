import React, { Component } from 'react'
import { Product } from './index'
import { initialState }from '../store/reducer'

class AllProducts extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.handleQuantityChange = this.handleQuantityChange.bind(this)
  }
  handleQuantityChange(e) {
    const pName = e.target.name.toLowerCase()
    const pValue = parseInt(e.target.value)
    this.setState({ [pName]: pValue })
  }

  render() {
    const { products } = initialState
    console.log('State => ', this.state)

    return (
      <div className='all-products'>
        {products.map(product =>
          <Product
            key={product.id}
            {...product}
            handleChange={this.handleQuantityChange}
          />
        )}
      </div>
    )
  }
}

export default AllProducts
