import { createStore, applyMiddleware } from 'redux'
import reducer from './reducer'
import { createLogger } from 'redux-logger'

const store = createStore(
  reducer,
  applyMiddleware(createLogger({ collapsed: true }))
)

export default store
