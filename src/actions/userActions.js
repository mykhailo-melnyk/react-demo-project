import * as types from '../constants/types';

const loginUserSuccess = (users) => {
    return {
        type: types.LOGIN_USER_SUCCESS,
        users: users
    }
};

const loginUserFailed = (error) => {
    return {
        type: types.LOGIN_USER_FAILED,
        error: error
    }
};

export const login = () => {
    return function (dispatch) {
        return dispatch(loginUserSuccess());
    };
};
