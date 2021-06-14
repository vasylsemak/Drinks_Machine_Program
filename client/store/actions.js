// ACTION TYPES
const actionTypes = {
  SET_CENTS_MACHINE: 'SET_CENTS_MACHINE',
  SET_COINS_INPUT: 'SET_COINS_INPUT',
  SET_COINS_INPUT_SUM: 'SET_COINS_INPUT_SUM',
  SET_ORDER_TOTAL: 'SET_ORDER_TOTAL',
  SET_ORDER_CLICKED: 'SET_ORDER_CLICKED'
}

// ACTION CREATORS

// coins container
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

// products container
export const setOrderTotal = sumNum => ({
  type: actionTypes.SET_ORDER_TOTAL,
  orderTotalCents: sumNum
})

export const setOrderClicked = clicked => ({
  type: actionTypes.SET_ORDER_CLICKED,
  clicked
})


export default actionTypes
