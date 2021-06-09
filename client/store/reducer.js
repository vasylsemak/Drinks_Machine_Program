import { coins, products } from '../../server/data'
import actionTypes from './actions'

export const initialState = {
  products,
  allCoinsMachine: coins,
  totalCentsMachine: 0,
  coinsInput: {},
  coinsInputSum: 0,
  totalCentsOrder: 0,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_CENTS_MACHINE:
      return { ...state,  totalCentsMachine: action.totalCentsMachine}
    case actionTypes.SET_COINS_INPUT:
      return { ...state, coinsInput: action.coinsInput }
    case actionTypes.SET_COINS_INPUT_SUM:
      return { ...state, coinsInputSum: action.coinsInputSum }

    // case actionTypes.GET_TOTAL_ORDER:
    //   return { ...state, totalCentsOrder: action.totalCentsOrder }
    default:
      return state
  }
}

export default reducer
