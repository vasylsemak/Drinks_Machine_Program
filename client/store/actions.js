// ACTION TYPES
const actionTypes = {
  SET_CENTS_MACHINE: 'SET_CENTS_MACHINE',
  SET_COINS_INPUT: 'SET_COINS_INPUT',
  CLEAR_COINS_INPUT: 'CLEAR_COINS_INPUT',
  SET_PRODUCTS_ORDER: 'SET_PRODUCTS_ORDER',
  UPDATE_PRODUCTS: 'UPDATE_PRODUCTS',
  SET_SHOW_MODAL: 'SET_SHOW_MODAL',
  SET_CHANGE_CENTS: 'SET_CHANGE_CENTS'
}

// ACTION CREATORS
export const setTotalCentsMachine = centsNum => ({
  type: actionTypes.SET_CENTS_MACHINE,
  totalCentsMachine: centsNum,
})

export const setCoinsInput = coinsArr => ({
  type: actionTypes.SET_COINS_INPUT,
  coinsInput: coinsArr
})

export const clearCoinsInput = () => ({
  type: actionTypes.CLEAR_COINS_INPUT,
})

export const setProductsOrder = orderArr => ({
  type: actionTypes.SET_PRODUCTS_ORDER,
  orderArr
})

export const updateProducts = orderObj => ({
  type: actionTypes.UPDATE_PRODUCTS,
  orderObj
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
