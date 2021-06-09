const actionTypes = {
  SET_CENTS_MACHINE: 'SET_CENTS_MACHINE',
  SET_COINS_INPUT: 'SET_COINS_INPUT',
  SET_COINS_INPUT_SUM: 'SET_COINS_INPUT_SUM',
  // GET_TOTAL_ORDER: 'GET_TOTAL_ORDER',
  // totalCentsMachine
}

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

// export const getTotalOrder = totalCentsOrder => ({
//   type: actionTypes.GET_TOTAL_ORDER,
//   totalCentsOrder
// })

export default actionTypes
