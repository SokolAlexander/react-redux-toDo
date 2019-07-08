import {getNewIndex,
        getToday,
        sortOrReverse,
        getMinMaxDates
        //getMaxMinDates
    } from '../utils.js';

const defData = [{
    index: 0,
    date: '2019-07-05',
    text: 'test',
    checked: false
    },
    {
    index: 1,
    date: '2011-07-05',
    text: 'test2',
    checked: false
    },
    {
    index: 2,
    date: '2015-07-05',
    text: 'test3',
    checked: false
    },
];

const defaultState = {
    filterTextValue: '',
    filterDateFromValue: getMinMaxDates(defData).min,
    filterDateToValue: getMinMaxDates(defData).max,
    addTextValue: '',
    addDateValue: getToday(),
    dateFilterActive: false,
    sortedByDate: false,
    sortedByText: false,
    someFlag: false,
    data: defData  
}

export default function(state = defaultState, action) {
    // console.log({
    //     ...state,
    //     [action.type]: action.payload
    // });

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
            ...state,
            data: state.data.concat({
                ...action.payload,
                index: getNewIndex(state.data)
            }),
            sortedByDate: false,
            sortedByText: false,
            filterDateFromValue: getMinMaxDates(state.data.concat({...action.payload})).min,
            filterDateToValue: getMinMaxDates(state.data.concat({...action.payload})).max
        }
        case 'REMOVE_ITEM': return {
            ...state,
            data: state.data.filter((element) => element.index !== parseInt(action.payload))
        }
        case 'CHECK_ITEM': return {
            ...state,
            data: state.data.map((element) => {
                if (element.index === parseInt(action.payload)) {
                    element.checked = !element.checked
                }
                return element
            })
        }
        case 'FILTER_SUBMIT': return {
            ...state,
            dateFilterActive: true
        }
        case 'FILTER_DROP': return {
            ...state,
            dateFilterActive: false
        }
        case 'SORT_BY_DATE': return {
            ...state,
            data: sortOrReverse(state.data, 'date', state.sortedByDate),
            someFlag: !state.someFlag,
            sortedByDate: true,
            sortedByText: false
        }
        case 'SORT_BY_TEXT': return {
            ...state,
            data: sortOrReverse(state.data, 'text', state.sortedByText),
            someFlag: !state.someFlag,
            sortedByDate: false,
            sortedByText: true
        }
        default: return state
    }
}

