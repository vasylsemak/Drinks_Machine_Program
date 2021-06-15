// f-n counts total amount in machine in cents
export function totalCentsMachine(coinsArr) {
  return coinsArr.reduce((sum, coin) => {
    sum = sum + (coin.quantity * coin.idValue)
    return sum
  }, 0)
}

// f-n counts order total
export function findOrderTotal(productsArr, orderObj) {
  const priceObj = {}
  let orderTotal = 0

  // create price map
  productsArr.forEach(p => {
    const key = p.name.toLowerCase().toLowerCase()
    const val = p.cost
    priceObj[key] = val
  })

  // add up total
  for(let key in orderObj) {
    if(key !== 'orderTotalCents') {
      let price = priceObj[key]
      let quantity = orderObj[key]
      orderTotal += (price * quantity)
    }
  }

  return orderTotal
}

// f-n counts total inserted in cash
export function totalCentsInserted(anObj) {
  return Object.entries(anObj)
    .filter(e => e[1] !== '')
    .map(e => {
      return [e[0], parseInt(e[1])]
    })
    .reduce((sum, e) => {
      if(e[0] === 'penny') return sum + e[1]
      else if(e[0] === 'nickel') return sum + (e[1] * 5)
      else if(e[0] === 'dime') return sum + (e[1] * 10)
      else if(e[0] === 'quater') return sum + (e[1] * 25)
      else return sum
    }, 0)
}

// f-n counts total drinks in the machine
export function totalDrinksInMachine(productsArr) {
  return productsArr.reduce((accum, product) => (accum + product.quantityAvailable), 0)
}

// f-n to clear productsOrder
export function clearProductsOrder(productsOrderObj) {
  const objCopy = {}

  for(let key in productsOrderObj) {
    if(typeof productsOrderObj[key] === 'number') objCopy[key] = 0
    else objCopy[key] = ''
  }

  return objCopy
}
