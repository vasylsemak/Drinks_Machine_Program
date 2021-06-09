// coin = {
//   idValue: 1,
//   name: 'Penny',
//   quantity: 10,
// }

// product = {
//   id: 1,
//   name: 'Coke',
//   cost: 25,
//   quantityAvailable: 5,
// }

import { coins, products } from '../../server/data'

const totalCents = coins.reduce((sum, coin) => {
  sum = sum + (coin.quantity * coin.idValue)
  return sum
}, 0)

const initialState = {
  products,
  allCoins: coins,
  totalCents
}

export default initialState
