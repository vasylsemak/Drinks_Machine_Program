import { coins, products } from '../../server/data'
import actionTypes from './actions'

export const initialState = {
  // coins
  allCoinsMachine: coins,
  totalCentsMachine: 0,
  coinsInput: {},
  coinsInputSum: 0,
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
      return { ...state, coinsInput: action.coinsInput }
    case actionTypes.SET_COINS_INPUT_SUM:
      return { ...state, coinsInputSum: action.coinsInputSum }
    // purchase
    case actionTypes.SET_PRODUCTS_ORDER:
      return { ...state, productsOrder: action.orderObj}
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
