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
  orderTotalCents: 0,
  isOrderClicked: false,
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
    //products
    case actionTypes.SET_ORDER_TOTAL:
      return { ...state, orderTotalCents: action.orderTotalCents }
    // click GET DRINKS
    case actionTypes.SET_ORDER_CLICKED:
      return { ...state, isOrderClicked: !action.clicked}
    default:
      return state
  }
}

export default reducer
