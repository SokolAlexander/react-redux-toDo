export const checkItem = (index) => {
    return {
        type: 'CHECK_ITEM',
        payload: index
    }
};

export const removeItem = (index) => {
    return {
        type: 'REMOVE_ITEM',
        payload: index
    }
};

export const sortByDate = () => {
    return {
        type: 'SORT_BY_DATE'
    }
};

export const sortByText = () => {
    return {
        type: 'SORT_BY_TEXT'
    }
};
