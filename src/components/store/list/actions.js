import {lsCheck, lsRemove} from '../../localStorage';

export const checkItem = (index) => {
    lsCheck(index);
    return {
        type: 'CHECK_ITEM',
        payload: index
    }
};

export const removeItem = (index) => {
    lsRemove(index);
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
