export const checkItem = (index) => {
    console.log('checkItemAction');
    return {
        type: 'CHECK_ITEM',
        payload: index
    }
};

export const addItem = (newItem) => {
    console.log('addItemAction');
    return {
        type: 'ADD_ITEM',
        payload: newItem
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

export const filterSubmit = (value1, value2) => {
    console.log('filterSubmit');
    return {
        type: 'FILTER_SUBMIT'
    }
}

export const filterDrop = () => {
    console.log('filterDrop');
    return {
        type: 'FILTER_DROP'
    }
}

export const sortByDate = () => {
    console.log('sortByDate');
    return {
        type: 'SORT_BY_DATE'
    }
}

export const sortByText = () => {
    console.log('sortByText');
    return {
        type: 'SORT_BY_TEXT'
    }
}

export const unsort = () => {
    console.log('unsort')
    return {
        type: 'UNSORT'
    }
}

export const reverseDate = () => {
    console.log('reverseDate');
    return {
        type: 'REVERSE_DATE'
    }
}