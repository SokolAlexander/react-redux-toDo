
/**
 * Set item in localStorage
 * @param {Object} item 
 */
export function lsAdd(item) {
    localStorage.setItem(`${item.index}-react-app`, JSON.stringify(item));
}

/**
 * remove item with index from localStorage
 * @param {Number} index 
 */
export function lsRemove(index) {
    localStorage.removeItem(`${index}-react-app`);
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
export function lsGetAll() {
    const data = [];
    for (const key in localStorage) {
        if (key.indexOf('-react-app') === -1) continue;
        data.push(JSON.parse(localStorage[key]));
    }
    return data
}