import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { connect } from 'react-redux'
import Button from './button'
import Checkbox from './checkbox'

function rootReducer(state = {clickCounter:0}, action) {
  switch (action.type) {
    case 'BUTTON_CLICK':
      return Object.assign({}, state, {clickCounter:state.clickCounter+1});
    case 'CHECKBOX_CHANGED':
      return Object.assign({}, state, {checkboxChecked: action.checkboxValue})
    default:
      return state;
  }
}
const store = createStore(rootReducer)

const App = ()=>(
  <div>
    <h1>Zzzzzzzzzzzzzooooooo</h1>
    <Button />
    <Checkbox />
  </div>
)


render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
