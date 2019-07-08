export function getNewIndex(array) {
    let index = 0;
    array.forEach(element => {
        if (element.index >= index) {
            index = element.index + 1;
        }
    });
    return index;
}

/**
 * returns true if targetDate is between dateFrom and dateTo,
 * if there's no targetDate retruns if dateFrom < dateTo
 * @param {String} dateFrom
 * @param {String} dateTo
 * @param {String} targetDate
 * @return {Boolean} 
 */
export function compareDates(dateFrom, dateTo, targetDate = null) {
if (targetDate) {
return (targetDate <= dateTo && targetDate >= dateFrom) ||
    (targetDate >= dateTo && targetDate <= dateFrom)
}
return dateFrom <= dateTo
};


/**
 * find min and max dates in data
 * @param {Array} array 
 * @return {Object}
 */
export function getMinMaxDates(array) {
    if (!array.length) return {
        min: {
        date: getToday()
        },
        max: {
        date: getToday()
        }
    };
    let max = array[0];
    let min = array[0];
    array.forEach(item => {
        if (compareDates(item.date, min.date)) {
        min = item;
        } else if (compareDates(max.date, item.date)) {
        max = item;
        }
    });
    return {min: min.date, max: max.date}
}


/**
 * gets date in yyyy-mm-dd format
 * @return {String} date
 */
export function getToday() {
const year = new Date().getFullYear();
const month = ((new Date().getMonth()+1) < 10) ?
    ('0' + (new Date().getMonth()+1)) :
    (new Date().getMonth() + 1);
const day = (new Date().getDate() < 10) ?
('0' + new Date().getDate()) :
(new Date().getDate());

return `${year}-${month}-${day}`;
}

export function sortOrReverse(array, field, flag) {
    if (flag) return array.reverse();
    return array.sort((a,b) => a[field] < b[field] ? -1 : 1);
}
