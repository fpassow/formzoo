//Redux action creators

export function buttonClick() {
	return {type:'BUTTON_CLICK'};
}

export function checkboxChanged(checked) {
	return {type:'CHECKBOX_CHANGED',
	        checked: checked
	}
}
