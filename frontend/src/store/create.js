import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import reducer from './reducers'
import * as middleware from './middleware'

const create = () => {
  return createStore(
    reducer,
    undefined,
    applyMiddleware(
      middleware.save(),
      logger
    )
  )
}

export default create
