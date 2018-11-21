import React from 'react'
import { connect } from 'react-redux'
import { checkboxChanged } from './actions'

//--noncontainer to go inside container

const CheckboxComponent = ({checkboxChanged, checkboxChecked})=>(
	<div>
	  {checkboxChecked?<span>__checked</span>:<span>unchecked</span>}
      <input type="checkbox" onChange={checkboxChanged} checked={checkboxChecked} />
    </div>
)

//--container--

function mapStateToProps(state) {
	return {
        checkboxChecked: state.checkboxChecked
    }
}

const mapDispatchToProps = dispatch => ({
  checkboxChanged: (e) => dispatch(checkboxChanged(e.target.checked))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CheckboxComponent)
