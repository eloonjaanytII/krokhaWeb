import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    usersData: [],
    totalUserCount: 0,
    pageSize: 10,
    portionSize: 10,
    currentPage: 1,
};

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        setTotalCount(state, action) {
            state.totalUserCount = action.payload
        },
        setUsersData(state, action) {
            state.usersData = action.payload
        },
        setCurrentPage(state, action) {
            state.currentPage = action.payload
        }
    }
});

export default usersSlice.reducer;
export const { setTotalCount, setUsersData, setCurrentPage} = usersSlice.actions;
