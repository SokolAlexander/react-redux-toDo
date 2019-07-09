import {getNewIndex, sortOrReverse} from '../../utils';
import {lsAdd, lsCheck, lsRemove, lsGetAll} from '../../localStorage';

const LSData = lsGetAll();

const defaultState = {
    dateFilterActive: false,
    sortedByDate: false,
    sortedByText: false,
    data: LSData
};

/**
 * reducer for List
 * @param {ReduxState} state (previous)
 * @param {Object} action
 * @return {ReduxState}
 */
export default function(state = defaultState, action) {
    switch (action.type) {
        case 'ADD_ITEM': {
            const newItem = {
                ...action.payload,
                index: getNewIndex(state.data)
            };
            lsAdd(newItem);
            return {
                ...state,
                data: state.data.concat(newItem),
                sortedByDate: false,
                sortedByText: false
            }
        }
        case 'REMOVE_ITEM': {
            lsRemove(action.payload);
            return {
                ...state,
                data: state.data.filter((element) => element.index !== parseInt(action.payload))
            }
        }
        case 'CHECK_ITEM': {
            lsCheck(action.payload);
            return {
                ...state,
                data: state.data.map((element) => {
                    if (element.index === parseInt(action.payload)) {
                        element.checked = !element.checked
                    }
                    return element
                })
            }
        }
        case 'SORT_BY_DATE': return {
            ...state,
            data: sortOrReverse(state.data, 'date', state.sortedByDate),
            sortedByDate: true,
            sortedByText: false
        }
        case 'SORT_BY_TEXT': return {
            ...state,
            data: sortOrReverse(state.data, 'text', state.sortedByText),
            sortedByDate: false,
            sortedByText: true
        }
        default: return state
    }
}

