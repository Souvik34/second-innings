import axios from 'axios';
import { authUrl } from './store';

export const login = (email, password) => async (dispatch) => {
    try {
        dispatch({ type: "loginRequest" });
        const { data } = await axios.post(`${authUrl}/login`, { email, password }, {
            withCredentials: true,
        });

        dispatch({ type: "loginSuccess", payload: data });

    } catch (error) {
        dispatch({ type: "loginFailure", payload: error.response.data.message });
    }
}

export const signup = (formData) => async (dispatch) => {
    try {
        dispatch({ type: "registerRequest" });
        const { data } = await axios.post(`${authUrl}/signup`, formData, {
            withCredentials: true,
        });

        dispatch({ type: "registerSuccess", payload: data });

    } catch (error) {
        dispatch({ type: "registerFailure", payload: error.response.data.message });
    }
}

export const loadUser = () => async (dispatch) => {
    try {
        dispatch({ type: "loadUserRequest" });
        const { data } = await axios.get(`${authUrl}/user`, {
            withCredentials: true,
        });

        dispatch({ type: "loadUserSuccess", payload: data });

    } catch (error) {
        dispatch({ type: "loadUserFailure" });
    }
}
