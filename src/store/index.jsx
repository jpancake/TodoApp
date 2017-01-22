/* globals window */
import { applyMiddleware, createStore, combineReducers, compose } from 'redux'
import Thunk from 'redux-thunk'

const configure = (initialState = {}) => {
  const reducer = combineReducers({})

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

  const store = createStore(reducer, initialState, composeEnhancers(
      applyMiddleware(Thunk)
  ))

  return store
}

export default configure
