import React from 'react'
import { connect } from 'react-redux'
import { radiogroupChanged } from './actions'

//--noncontainer component to go inside container

const RadiogroupComponent = ({radiobuttonChanged, radiogroupValue})=>(
  <div>
    <input type="radio" name="radiogroup" id="radiothis" value="this"
      checked={radiogroupValue=='this'}
      onChange={radiobuttonChanged} />
    <label for="radiothis">This</label>
    <br />
    <input type="radio" name="radiogroup" id="radiothat" value="that"
      checked={radiogroupValue=='that'}
      onChange={radiobuttonChanged} />
    <label for="radiothat">That</label>
    <br />
    <input type="radio" name="radiogroup" id="radiotheother" value="theother" 
      checked={radiogroupValue=='theother'}
      onChange={radiobuttonChanged}/>
    <label for="radiotheother">The Other</label>
    <br />
    Current choice: {radiogroupValue}
  </div>
)

//--container--

function mapStateToProps(state) {
	return {
        radiogroupValue: state.radiogroupValue
    }
}

const mapDispatchToProps = dispatch => ({
  radiobuttonChanged: (e) => dispatch(radiogroupChanged(e.target.value))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RadiogroupComponent)
