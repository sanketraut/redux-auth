import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        data: null
    },
    reducers: {
        login: (state) => {
            state.data = {username: 'sanketraut'};
        },
        logout: (state) => {
            state.data = null;
        }
    }
});

export const loggedUser = (state) => state.user.data;
export const {login, logout} = userSlice.actions;

export default userSlice.reducer;