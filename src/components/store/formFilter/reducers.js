import {getMinMaxDates} from '../../utils';

const defaultState = {
    filterTextValue: '',
    filterDateFromValue: getMinMaxDates([]).min,
    filterDateToValue: getMinMaxDates([]).max
}

export default function(state = defaultState, action) {
    switch (action.type) {
        case 'FILTER_TEXT_CHANGE': return {
            ...state,
            filterTextValue: action.payload
        }
        case 'FILTER_DATE_TO_CHANGE': return {
            ...state,
            filterDateToValue: action.payload
        }
        case 'FILTER_DATE_FROM_CHANGE': return {
            ...state,
            filterDateFromValue: action.payload
        }
        case 'FILTER_SUBMIT': return {
            ...state,
            dateFilterActive: true
        }
        case 'FILTER_DROP': return {
            ...state,
            dateFilterActive: false
        }
        default: return state
    }
}

