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
    date: this._getDateForForm()
    },
    max: {
    date: this._getDateForForm()
    }
};
let max = array[0];
let min = array[0];
array.forEach(item => {
    if (this._compareDates(item.date, min.date)) {
    min = item;
    } else if (this._compareDates(max.date, item.date)) {
    max = item;
    }
});
return {min: min, max: max}
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

export function dataByDate(itemA, itemB, order = 1) {
    let i = order ? 1 : -1;
    console.log(order);
    if (itemA.date < itemB.date) return -i;
    return i;
}

// let arr = [{
//     date: 1
//     },
//     {
//         date: 0
//     },
//     {
//         date: -1
//     }];
// console.log(arr.sort(dataByDate));
// console.log(arr);

export function dataByText(itemA, itemB) {
    if (itemA.text < itemB.text) return -1;
    return 1
}
