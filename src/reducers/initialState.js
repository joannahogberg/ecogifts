let favorites = {}
const persistedState = localStorage.getItem('reduxState')
if (persistedState) {
    favorites = JSON.parse(persistedState)
}

export default {
    favorites,
    gifts: []
};