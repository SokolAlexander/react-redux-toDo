/**
 * finds item with max index in array and returns maxIndex+1
 * @param {Array} array
 * @return {Number} 
 */
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
        min: getToday(),
        max: getToday()
    };

    let max = array[0].date;
    let min = array[0].date;
    array.forEach(item => {
        if (compareDates(item.date, min)) {
        min = item.date;
        } else if (compareDates(max, item.date)) {
        max = item.date;
        }
    });
    return {min, max}
}


/**
 * gets date in yyyy-mm-dd format
 * @param {Date} date
 * @return {String} 
 */
export function getToday(date = new Date()) {
    const year = date.getFullYear();
    const month = ( (date.getMonth()+1) < 10 ) ?
        ( '0' + (date.getMonth()+1) ) :
        ( date.getMonth() + 1 );
    const day = ( date.getDate() < 10 ) ?
        ( '0' + date.getDate() ) :
        ( date.getDate() );

    return `${year}-${month}-${day}`;
}

/**
 * Sorts by field or reverses array depending on the flag
 * @param {Array} array 
 * @param {String} field 
 * @param {Boolean} flag 
 * @return {Array}
 */
export function sortOrReverse(array, field, flag) {
    const newData = array.slice();
    if (flag) return newData.reverse();
    return newData.sort((a,b) => a[field] < b[field] ? -1 : 1);
}
