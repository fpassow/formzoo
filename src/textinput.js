import React from 'react'
import { connect } from 'react-redux'
import { textinputChanged } from './actions'

//--noncontainer to go inside container

const TextinputComponent = ({textinputChanged, text})=>(
	<div>
    <input type="text" onChange={textinputChanged} value={text} />
    <br />
    &quot;{text}&quot;
  </div>
)

//--container--

function mapStateToProps(state) {
	return {
        text: state.textinputText
  }
}

const mapDispatchToProps = dispatch => ({
  textinputChanged: (e) => dispatch(textinputChanged(e.target.value))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TextinputComponent)
