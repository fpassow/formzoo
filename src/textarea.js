import React from 'react'
import { connect } from 'react-redux'
import { textareaChanged } from './actions'

//--noncontainer to go inside container

const TextareaComponent = ({textareaChanged, text})=>(
	<div>
    <textarea onChange={textareaChanged} value={text} />
    <pre style={{border:'1px solid gray'}}>{text}</pre>
  </div>
)

//--container--

function mapStateToProps(state) {
	return {
        text: state.textareaText
  }
}

const mapDispatchToProps = dispatch => ({
  textareaChanged: (e) => dispatch(textareaChanged(e.target.value))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TextareaComponent)
