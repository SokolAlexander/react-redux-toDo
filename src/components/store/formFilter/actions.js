export const filterTextChange = (newValue) => {
    return {
        type: 'FILTER_TEXT_CHANGE',
        payload: newValue
    }
};

export const filterDateFromChange = (newValue) => {
    return {
        type: 'FILTER_DATE_FROM_CHANGE',
        payload: newValue
    }
};

export const filterDateToChange = (newValue) => {
    return {
        type: 'FILTER_DATE_TO_CHANGE',
        payload: newValue
    }
};

export const filterSubmit = () => {
    return {
        type: 'FILTER_SUBMIT'
    }
};

export const filterDrop = () => {
    return {
        type: 'FILTER_DROP'
    }
};