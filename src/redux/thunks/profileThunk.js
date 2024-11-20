import { createAsyncThunk } from "@reduxjs/toolkit";
import ProfileAPI from "./../../DAL/apiContainer";
import { setUsersProfile } from "../reducers/profileSlice";

export const getProfileThunk = createAsyncThunk() (

    async (userId, {dispatch}) => {

        const data = await ProfileAPI.getProfile(userId);
        dispatch(setUsersProfile(data))
    }
);
