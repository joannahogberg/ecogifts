export function saveGiftListToLocalStorage(array, listName) {
    localStorage.setItem(listName, JSON.stringify(array));
}

export function getItemListFromLocalStorage(listName) {
    const storedToDoList = JSON.parse(localStorage.getItem(listName));
    return storedGiftsList || [];
}