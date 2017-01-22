/* globals $ */
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router, browserHistory } from 'react-router'

import routes from './routes'
import configure from './store'

import './styles'

const store = configure()

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  $('#app')[0])

if (module.hot) {
  module.hot.accept()
}
