export function saveGiftListToLocalStorage(array, gift) {
    localStorage.setItem(gift, JSON.stringify(array));
}

export function getItemListFromLocalStorage(gift) {
    const savedGiftsList = JSON.parse(localStorage.getItem(gift));
    return savedGiftsList || [];
} 