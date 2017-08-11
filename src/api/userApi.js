import client from './client';

export const login = (payload) => {
    return axios.post(BASE_URL + '/Profiles/', payload)
};

export const logoutCurrentProfile = (payload) => {

};