import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    profilePostData: [
        { id: 1, post: 'first post ' },
        { id: 2, post: 'second post ' },
        { id: 3, post: 'third post ' },
        { id: 4, post: 'four post ' },
    ],
    profile: null,
    status: " "
};

const profileSlice = createSlice({
    name: "profile",
    initialState,
    reducers: {
        addPost(state, action) {
            state.profilePostData.push({ id: 5, post: action.payload });
        },
        deletePost(state, action) {
            state.profilePostData.pop({ id: 5, post: action.payload });
        },
        setPhotoUser(state, action) {
            state.profile.photos = action.payload;
        },
        setStatus(state, action) {
            state.status = action.payload;
        },
        setUsersProfile(state, action) {
            state.profile = action.payload;
        },

    }
});

export default profileSlice;
export const { addPost, setUsersProfile, setStatus, savePhotoSuccess } = profileSlice.actions;
