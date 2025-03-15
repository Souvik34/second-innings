import { createReducer } from "@reduxjs/toolkit";

export const userReducer = createReducer(
    {
        isAuthenticated: null,
    },
    (builder) => {
        builder
            .addCase("loginRequest", (state) => {
                state.loading = true;
            })
            .addCase("registerRequest", (state) => {
                state.loading = true;
            })
            .addCase("loadUserRequest", (state) => {
                state.loading = true;
            })
        builder
            .addCase("loginSuccess", (state, action) => {
                state.loading = false;
                state.isAuthenticated = true;
                state.user = action.payload.user;
                state.message = action.payload.message;
            })
            .addCase("registerSuccess", (state, action) => {
                state.loading = false;
                state.isAuthenticated = true;
                state.user = action.payload.user;
                state.message = action.payload.message;
            })
            .addCase("loadUserSuccess", (state, action) => {
                state.loading = false;
                state.isAuthenticated = true;
                state.user = action.payload;
            })
        builder
            .addCase("loginFailure", (state, action) => {
                state.loading = false;
                state.isAuthenticated = false;
                state.error = action.payload;
            })
            .addCase("registerFailure", (state, action) => {
                state.loading = false;
                state.isAuthenticated = false;
                state.error = action.payload;
            })
            .addCase("loadUserFailure", (state) => {
                state.loading = false;
                state.isAuthenticated = false;
            })

        builder.addCase("clearError", (state) => {
            state.error = null;
        });
        builder.addCase("clearMessage", (state) => {
            state.message = null;
        });
    }
);