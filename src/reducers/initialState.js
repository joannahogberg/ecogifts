let favorites = {}
//default state favorites

//hämtar det som finns i localstorage
const persistedState = localStorage.getItem('reduxState')

//det som finns i localstorage, lägg till det i favorites
if (persistedState) {
    favorites = JSON.parse(persistedState)
}


export default {
    favorites,
    gifts: []
};