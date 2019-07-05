const defaultState = {
    filterTextValue: '',
    filterDateFromValue: '',
    filterDateToValue: '',
    addTextValue: '',
    addDateValue: '',
    data: [{
        index: 0,
        date: '2019-07-05',
        text: 'test',
        checked: false
    }]
    
}

export default function(state = defaultState, action) {
    console.log('hi, i\'m reducer!');

    switch (action.type) {
        case 'ADD_TEXT_CHANGE': return {
            ...state,
            addTextValue: action.payload
        }
        case 'ADD_DATE_CHANGE': return {
            ...state,
            addDateValue: action.payload
        }
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
        case 'ADD_ITEM': return {
            ...state
        }
        case 'REMOVE_ITEM': return {
            ...state
        }
        case 'CHECK_ITEM': return {
            ...state
        }
        default: return state
    }
}