import React from 'react'
import { connect } from 'react-redux'
import { buttonClick } from './actions'

//--noncontainer to go inside container

const ButtonComponent = ({buttonClick, clickCounter})=>(
  <button onClick={buttonClick}>Click Me! {clickCounter}</button>
)

//--container--

const mapStateToProps = state => ({
  clickCounter: state.clickCounter
})

const mapDispatchToProps = dispatch => ({
  buttonClick: () => dispatch(buttonClick())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ButtonComponent)
