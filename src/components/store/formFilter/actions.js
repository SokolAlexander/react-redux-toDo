
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