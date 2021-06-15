import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Product } from './index'
import { setProductsOrder } from '../store/actions'

class AllProductsDisconected extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.handleQuantityChange = this.handleQuantityChange.bind(this)
  }

  handleQuantityChange(e) {
    const pName = e.target.name.toLowerCase()
    const pValue = parseInt(e.target.value)
    console.log('pName ', pName)

    this.props.setOrder([ pName, pValue ])
  }

  render() {
    const { products } = this.props

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

const mapStateToProps = state => ({ products: state.products })

const mapDispatchToProps = dispatch => ({
  setOrder: orderArr => dispatch(setProductsOrder(orderArr)),
})

const AllProducts = connect(mapStateToProps, mapDispatchToProps)
  (AllProductsDisconected)
export default AllProducts
