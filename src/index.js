import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { connect } from 'react-redux'
import Button from './button'
import Checkbox from './checkbox'
import Radiogroup from './radiogroup'
import Select from './select'
import Multiselect from './multiselect'
import Textinput from './textinput'
import Textarea from './textarea'

const state0 = {
	clickCounter: 0,
	checkboxChecked: false,
	radiogroupValue: 'this',
	selectValue: 'here',
	multiselectSelections: [],
	textinputText: '',
	textareaText:' '
}
function rootReducer(state = state0, action) {
  switch (action.type) {
    case 'BUTTON_CLICK':
      return Object.assign({}, state, {clickCounter:state.clickCounter+1});
    case 'CHECKBOX_CHANGED':
      return Object.assign({}, state, {checkboxChecked: action.checked})
    case 'RADIOGROUP_CHANGED':
      return Object.assign({}, state, {radiogroupValue: action.value})
    case 'SELECT_CHANGED':
      return Object.assign({}, state, {selectValue: action.value})
    case 'MULTISELECT_CHANGED':
      return Object.assign({}, state, {multiselectSelections: action.selections})
    case 'TEXTINPUT_CHANGED':
      return Object.assign({}, state, {textinputText: action.text})
    case 'TEXTAREA_CHANGED':
      return Object.assign({}, state, {textareaText: action.text})
    default:
      return state;
  }
}
const store = createStore(rootReducer)

const App = ()=>(
  <div>
    <h1>React-Redux Form Zoo</h1>
    <Button />
    <Checkbox />
    <Radiogroup />
    <Select />
    <Multiselect />
    <Textinput />
    <Textarea />
  </div>
)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
