import * as types from '../constants/types';

const initialState = {
    user: {},
    error: '',
    isActionCompleted: false,
    isAuthenticated: false
};

export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case types.LOGIN_USER_SUCCESS:
            return Object.assign({}, state, {
                user: action.user,
                isActionCompleted: true
            });
        case types.LOGIN_USER_FAILED:
            return Object.assign({}, state, {
                error: action.error,
                isActionCompleted: false
            });
        default:
            return state
    }
}