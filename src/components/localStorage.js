export function lsAdd(item) {
    localStorage.setItem(`${item.index}-react-app`, JSON.stringify(item));
}

export function lsRemove(index) {
    localStorage.removeItem(`${index}-react-app`);
}

export function lsCheck(index) {
    const item = JSON.parse(localStorage.getItem(`${index}-react-app`));
    item.checked = !item.checked;
    localStorage.setItem(`${index}-react-app`, JSON.stringify(item));
}

export function lsGetAll() {
    const data = [];
    for (let key in localStorage) {
        if (key.indexOf('-react-app') === -1) continue;
        data.push(JSON.parse(localStorage[key]));
    }
    return data
}