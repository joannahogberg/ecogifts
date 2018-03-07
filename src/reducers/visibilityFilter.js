import * as types from "../actions/actionTypes";

const visibilityFilter = (state = types.SHOW_ALL, action) => {

    switch (action.type) {
        case types.SET_VISIBILITY_FILTER:
            console.log(action.filter)
            return action.filter
        default:
            return state
    }
}

export default visibilityFilter