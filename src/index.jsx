/* globals $ */
import React from 'react'
import ReactDOM from 'react-dom'

ReactDOM.render(
  <div>Hello World</div>,
  $('#app')[0])

if (module.hot) {
  module.hot.accept()
}
