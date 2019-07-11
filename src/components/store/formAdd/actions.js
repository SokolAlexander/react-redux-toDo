import {lsAdd} from '../../localStorage';

export const addTextChange = (newValue) => {
    return {
        type: 'ADD_TEXT_CHANGE',
        payload: newValue
    }
};

export const addDateChange = (newValue) => {
    return {
        type: 'ADD_DATE_CHANGE',
        payload: newValue
    }
};

export const addItem = (newItem) => {
    lsAdd(newItem);
    return {
        type: 'ADD_ITEM',
        payload: newItem
    }
};