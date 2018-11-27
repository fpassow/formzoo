import React from 'react'
import { connect } from 'react-redux'
import { selectChanged } from './actions'

/* Note: The first click on the select currently generates a warning:
    "[Violation] Added non-passive event listener to a scroll-blocking 'mousewheel' event..."

   After lots of googling, I noticed that the codepen linked 
     from the react docs get the same warning.
       https://reactjs.org/docs/forms.html  
       https://codepen.io/gaearon/pen/JbbEzX?editors=0010

   If Dan Abramov's codepen gets this warning too, I think I can live with it.
     November 22, 2018
*/

//--noncontainer component to go inside container

const SelectComponent = ({selectChanged, selectValue})=>(
  <div>
    <select onChange={selectChanged}>
      <option value="here">Here</option>
      <option value="there">There</option>
      <option value="somewhereelse">Somewhere else</option>
    </select>
    <br />
    Current choice: {selectValue}
  </div>
)

//--container--

function mapStateToProps(state) {
	return {
        selectValue: state.selectValue
    }
}

const mapDispatchToProps = dispatch => ({
  selectChanged: (e) => {
    dispatch(selectChanged(e.target.value))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectComponent)
