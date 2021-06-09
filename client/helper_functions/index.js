export function countSumCoins(anObj) {
  return Object.entries(anObj)
    .filter(e => e[1] !== '')
    .map(e => {
      return [e[0], parseInt(e[1])]
    })
    .reduce((sum, e) => {
      if(e[0] === 'penny') return sum + e[1]
      if(e[0] === 'nickel') return sum + (e[1] * 5)
      if(e[0] === 'dime') return sum + (e[1] * 10)
      if(e[0] === 'quater') return sum + (e[1] * 25)
    }, 0)
}
