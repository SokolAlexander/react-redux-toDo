export function getNextIndex() {
    let index = parseInt(localStorage.getItem('nextIndex'));
    if (!index) index = 0;
    return index
}

/**
 * Set item in localStorage
 * @param {Object} item 
 */
export function lsAdd(item) {
    item = {
        ...item,
        index: getNextIndex()
    };
    console.log(item.index);
    localStorage.setItem(`${item.index}-react-app`, JSON.stringify(item));
    localStorage.setItem('nextIndex', item.index + 1);
}

/**
 * remove item with index from localStorage
 * @param {Number} index 
 */
export function lsRemove(index) {
    localStorage.removeItem(`${index}-react-app`);
    if (lsIsEmpty()) localStorage.removeItem('nextIndex');
}

/**
 * Check or uncheck item with index in localStorage
 * @param {Number} index 
 */
export function lsCheck(index) {
    const item = JSON.parse(localStorage.getItem(`${index}-react-app`));
    item.checked = !item.checked;
    localStorage.setItem(`${index}-react-app`, JSON.stringify(item));
}

/**
 * Get all items from localStorage
 * @return {Array}
 */
export default function lsGetAll() {
    const data = [];
    for (const key in localStorage) {
        if (key.indexOf('-react-app') === -1) continue;
        data.push(JSON.parse(localStorage[key]));
    }
    return data
}

function lsIsEmpty() {
    let i = 0;
    for (const key in localStorage) {
        if (key.indexOf('-react-app') === -1) continue;
        i++;
    };
    return !i
}