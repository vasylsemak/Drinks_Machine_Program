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

// f-n counts total amount in machine in cents
export function totalCentsMachine(coinsArr) {
  return coinsArr.reduce((sum, coin) => {
    sum = sum + (coin.quantity * coin.idValue)
    return sum
  }, 0)
}
