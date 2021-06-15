// ACTION TYPES
const actionTypes = {
  SET_CENTS_MACHINE: 'SET_CENTS_MACHINE',
  SET_COINS_INPUT: 'SET_COINS_INPUT',
  SET_COINS_INPUT_SUM: 'SET_COINS_INPUT_SUM',
  SET_PRODUCTS_ORDER: 'SET_PRODUCTS_ORDER',
  UPDATE_PRODUCTS: 'UPDATE_PRODUCTS',
  SET_ORDER_TOTAL: 'SET_ORDER_TOTAL',
  SET_SHOW_MODAL: 'SET_SHOW_MODAL',
  SET_CHANGE_CENTS: 'SET_CHANGE_CENTS'
}

// ACTION CREATORS
export const setTotalCentsMachine = centsNum => ({
  type: actionTypes.SET_CENTS_MACHINE,
  totalCentsMachine: centsNum,
})

export const setCoinsInput = coinsObj => ({
  type: actionTypes.SET_COINS_INPUT,
  coinsInput: coinsObj
})

export const setCoinsInputSum = sumNum => ({
  type: actionTypes.SET_COINS_INPUT_SUM,
  coinsInputSum: sumNum
})

export const setPorductsOrder = orderObj => ({
  type: actionTypes.SET_PRODUCTS_ORDER,
  orderObj
})

export const updateProducts = orderObj => ({
  type: actionTypes.UPDATE_PRODUCTS,
  orderObj
})

export const setOrderTotal = sumNum => ({
  type: actionTypes.SET_ORDER_TOTAL,
  orderTotalCents: sumNum
})

export const setShowModal = show => ({
  type: actionTypes.SET_SHOW_MODAL,
  show
})

export const setChangeCents = centsNum => ({
  type: actionTypes.SET_CHANGE_CENTS,
  centsNum
})



export default actionTypes
