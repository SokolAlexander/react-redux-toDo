export const checkItem = (index) => {
    console.log('checkItemAction');
    return {
        type: 'CHECK_ITEM',
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
