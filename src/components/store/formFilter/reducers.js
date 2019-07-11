import {getMinMaxDates} from '../../utils';
import getAllDataFromLocalStorage from '../../localStorage';

const lsData = getAllDataFromLocalStorage();

const defaultState = {
    filterTextValue: '',
    filterDateFromValue: getMinMaxDates(lsData).min,
    filterDateToValue: getMinMaxDates(lsData).max
}

/**
 * reducer for formFilter
 * @param {ReduxState} state 
 * @param {Object} action
 * @return {ReduxState} 
 */
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
            filterTextValue: '',
            dateFilterActive: true
        }
        case 'FILTER_DROP': return {
            ...state,
            dateFilterActive: false
        }
        case 'ADD_ITEM': return {
            ...state,
            filterTextValue: '',
            dateFilterActive: false,
            filterDateFromValue: state.filterDateFromValue > action.payload.date
                ? action.payload.date: state.filterDateFromValue,
            filterDateToValue: state.filterDateFromValue < action.payload.date
            ? action.payload.date: state.filterDateFromValue
        }
        default: return state
    }
}

