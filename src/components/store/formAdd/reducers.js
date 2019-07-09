import {getToday} from '../../utils';

const defaultState = {
    addTextValue: '',
    addDateValue: getToday(),
}

/**
 * reducer for formAdd
 * @param {ReduxState} state 
 * @param {Object} action 
 * @return {ReduxState}
 */
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
        case 'ADD_ITEM': console.log('formAdd'); return {
            ...state,
            addTextValue: '',
            addDateValue: getToday()
        }
        default: return state
    }
}

