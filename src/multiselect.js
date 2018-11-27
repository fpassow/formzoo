import React from 'react'
import { connect } from 'react-redux'
import { multiselectChanged } from './actions'

//--noncontainer component to go inside container

const MultiselectComponent = ({multiselectChanged, multiselectSelections})=>{
  function isSelected(value) {return multiselectSelections.includes(value)}
  return (
    <div>
      <select multiple="true" onChange={multiselectChanged}>
        <option value="eggs" selected={isSelected('eggs')} >Eggs</option>
        <option value="bacon" selected={isSelected('bacon')} >Bacon</option>
        <option value="toast" selected={isSelected('toast')} >Toast</option>
      </select>
      <br />
      Current choices: {multiselectSelections.join()}
    </div>
  )
}

//--container--

function mapStateToProps(state) {
	return {
        multiselectSelections: state.multiselectSelections
    }
}

//call the action creator with an array of selected option values (strings).
const mapDispatchToProps = dispatch => ({
  multiselectChanged: (e) =>{
    dispatch(multiselectChanged(
      Array.from(e.target.options).filter((opt)=>(opt.selected))
      .map((opt)=>(opt.value))
    ))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MultiselectComponent)
