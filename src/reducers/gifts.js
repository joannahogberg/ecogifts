import initialState from "./initialState";
import * as types from "../actions/actionTypes";

export default function gifts(state = initialState.gifts, action) {
    switch (action.type) {
        case types.FETCH_GIFTS_BEGIN:
            // Mark the state as "loading" to show loader
            return {
                ...state,
                loading: true,
                error: null
            };
        case types.RECEIVE_GIFTS:
            return {
                ...state,
                loading: false,
                gifts: action.gifts
            };

        case types.REQUESTED_GIFT:
            return {
                ...state,
                loading: false,
                gifts: action.gift
            };

        case types.FILTERED_BY_CATEGORY:
            return {
                ...state,
                loading: false,
                gifts: action.gifts
            };

        case types.SEARCH:
            return {
                ...state,
                loading: false,
                gifts: action.result
            };
        case types.FETCH_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
                gifts: []
            };

        default:
            return state;
    }
}