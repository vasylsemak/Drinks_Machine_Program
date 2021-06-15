import { coins, products } from '../../server/data'
import actionTypes from './actions'
import { totalCentsInserted } from '../helper_functions'

const clearedCoinsInput = {
  penny: '',
  nickel: '',
  dime: '',
  quater: '',
  coinsInputSum: 0,
}

export const initialState = {
  // coins
  allCoinsMachine: coins,
  totalCentsMachine: 0,
  coinsInput: clearedCoinsInput,
  // products
  products,
  //purchase
  productsOrder: {},
  orderTotalCents: 0,
  showModal: false,
  changeCents: 0
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    // coins
    case actionTypes.SET_CENTS_MACHINE:
      return { ...state,  totalCentsMachine: action.totalCentsMachine}

    case actionTypes.SET_COINS_INPUT:
      // update coinsInput key/val
      const [ newKey, newVal ] = action.coinsInput
      const currInput = state.coinsInput
      const newInput = { ...currInput, [newKey]: newVal }
      // update coinsInputSum
      const newSum = totalCentsInserted(newInput)
      const updatedSumInput = { ...newInput, coinsInputSum: newSum }
      return { ...state, coinsInput: updatedSumInput }

    case actionTypes.CLEAR_COINS_INPUT:
      return { ...state, coinsInput: clearedCoinsInput }

    // purchase
    case actionTypes.SET_PRODUCTS_ORDER:
      return { ...state, productsOrder: action.orderObj}

    case actionTypes.UPDATE_PRODUCTS:
      const orderObj = action.orderObj;
      const updatedProducts = state.products.map(product => {
        const name = product.name.toLowerCase()

        if(orderObj[name]) {
          const newQuantity = product.quantityAvailable - orderObj[name]
          return { ...product, quantityAvailable: newQuantity }
        } else {
          return product
        }
      })
      return { ...state, products: updatedProducts }

    case actionTypes.SET_ORDER_TOTAL:
      return { ...state, orderTotalCents: action.orderTotalCents }

    case actionTypes.SET_SHOW_MODAL:
      return { ...state, showModal: !action.show }

    case actionTypes.SET_CHANGE_CENTS:
      return { ...state, changeCents: action.centsNum}

    default:
      return state
  }
}

export default reducer
