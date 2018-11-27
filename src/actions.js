//Redux action creators

export function buttonClick() {
	return {type:'BUTTON_CLICK'};
}

export function checkboxChanged(checked) {
	return {type:'CHECKBOX_CHANGED',
	        checked: checked
	}
}

export function radiogroupChanged(value) {
	return {type:'RADIOGROUP_CHANGED',
	        value: value
	}
}

export function selectChanged(value) {
	return {type:'SELECT_CHANGED',
	        value: value
	}
}

export function multiselectChanged(selections) {
	return {type:'MULTISELECT_CHANGED',
	        selections: selections
	}
}

export function textinputChanged(text) {
	return {type:'TEXTINPUT_CHANGED',
	        text: text
	}
}

export function textareaChanged(text) {
	return {type:'TEXTAREA_CHANGED',
	        text: text
	}
}
