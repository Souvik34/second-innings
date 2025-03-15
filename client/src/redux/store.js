import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from './reducer';

export const store = configureStore({
    reducer: {
        user: userReducer,
    },
});

export const server = "http://localhost:5000";
export const authUrl = `${server}/api/auth`;