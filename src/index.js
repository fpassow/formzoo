import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { connect } from 'react-redux'

function rootReducer(state = {zooOo:'Z'}, action) {
  switch (action.type) {
    case 'DO_ZOO':
      return Object.assign({}, state, {zooOo:state.zooOo+'o'});
    default:
      return state;
  }
}
const store = createStore(rootReducer)

const App = ()=>(
  <div>
    <h1>Zzzzzzzzzzzzzooooooo</h1>
    <Zzoo1 />
  </div>
)

//--noncontainer to go inside container
const Zz1 = ({doZoo, zooOo})=>(
  <h1 onClick={doZoo}>{zooOo}</h1>
)
//--container--
const mapStateToProps = state => ({
  zooOo: state.zooOo
})
const mapDispatchToProps = dispatch => ({
  doZoo: () => dispatch({type:"DO_ZOO"})
})
const Zzoo1 = connect(
  mapStateToProps,
  mapDispatchToProps
)(Zz1)


render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
