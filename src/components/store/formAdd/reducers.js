import {getToday} from '../../utils';

const defaultState = {
    addTextValue: '',
    addDateValue: getToday(),
}

export default function(state = defaultState, action) {
    switch (action.type) {
        case 'ADD_TEXT_CHANGE': return {
            ...state,
            addTextValue: action.payload
        }
        case 'ADD_DATE_CHANGE': return {
            ...state,
            addDateValue: action.payload
        }
        default: return state
    }
}

