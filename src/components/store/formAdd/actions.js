

export const addTextChange = (newValue) => {
    console.log('addTextChange');
    return {
        type: 'ADD_TEXT_CHANGE',
        payload: newValue
    }
};

export const addDateChange = (newValue) => {
    console.log('addDateChange');
    return {
        type: 'ADD_DATE_CHANGE',
        payload: newValue
    }
};

export const addItem = (newItem) => {
    console.log('addItemAction');
    return {
        type: 'ADD_ITEM',
        payload: newItem
    }
};