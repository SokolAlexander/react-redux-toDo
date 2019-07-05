export const checkItem = (index) => {
    console.log('checkItemAction');
    return {
        type: 'CHECK_ITEM',
        payload: index
    }
};

export const addItem = (index) => {
    console.log('addItemAction');
    return {
        type: 'ADD_ITEM',
        payload: index
    }
};

export const removeItem = (index) => {
    console.log('removeItemAction');
    return {
        type: 'REMOVE_ITEM',
        payload: index
    }
};

export const filterTextChange = (newValue) => {
    console.log('filterTextChange')
    return {
        type: 'FILTER_TEXT_CHANGE',
        payload: newValue
    }
};

export const filterDateFromChange = (newValue) => {
    console.log('filterDateFromChange')
    return {
        type: 'FILTER_DATE_FROM_CHANGE',
        payload: newValue
    }
};

export const filterDateToChange = (newValue) => {
    console.log('filterDateToChange');
    return {
        type: 'FILTER_DATE_TO_CHANGE',
        payload: newValue
    }
};

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