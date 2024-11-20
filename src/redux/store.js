import { configureStore } from "@reduxjs/toolkit";
import profileSlice from "./reducers/profileSlice";
import messagesSlice from "./reducers/messagesSlice";
import usersSlice from './reducers/usersSlice';
import authSlice from "./reducers/authSlice";
import appSlice from "./reducers/appSlice";

const store = configureStore({
    reducer: {
        profile: profileSlice,
        messages: messagesSlice,
        users: usersSlice,
        auth: authSlice,
        app: appSlice,
    }

});

export default store;