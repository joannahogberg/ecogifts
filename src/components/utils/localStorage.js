export function saveGiftListToLocalStorage(array, gift) {
    localStorage.setItem(gift, JSON.stringify(array));
}

export function getItemListFromLocalStorage(listName) {
    const savedGiftsList = JSON.parse(localStorage.getItem(gift));
    return savedGiftsList || [];
}