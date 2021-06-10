import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Product } from './index'
import {  findOrderTotal } from '../helper_functions'
import { setOrderTotal } from '../store/actions'

class AllProductsDisconected extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.handleQuantityChange = this.handleQuantityChange.bind(this)
  }

  componentDidUpdate() {
    const { products, setOrderSum } = this.props
    const orderObj = this.state
    //calculate order total with helper f-n
    const orderCalculatedSum = findOrderTotal(products, orderObj)
    // set orderTotalCents on redux state
    setOrderSum(orderCalculatedSum)
  }

  handleQuantityChange(e) {
    const pName = e.target.name.toLowerCase()
    const pValue = parseInt(e.target.value)
    this.setState({ [pName]: pValue })
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

const mapStateToProps = state => ({
  products: state.products
})

const mapDispatchToProps = dispatch => ({
  setOrderSum: sumNum => dispatch(setOrderTotal(sumNum))
})

const AllProducts = connect(mapStateToProps, mapDispatchToProps)
  (AllProductsDisconected)
export default AllProducts
