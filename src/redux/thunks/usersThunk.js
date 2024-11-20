import { usersAPI } from "../../dal/apiContainer"
import { setCurrentPage, setTotalCount, setUsersData } from "../reducers/usersSlice"

export const getUsers = (currentPage, pageSize) => async (dispatch) => {

    let data = await usersAPI.getUsers(currentPage, pageSize)
    dispatch(setTotalCount(data.totalCount))
    dispatch(setUsersData(data.items))
}

export const onChangedPage = (pageNumber, pageSize) => async (dispatch) => {

    dispatch(setCurrentPage(pageNumber))
    let data = await usersAPI.getUsers(pageNumber, pageSize)
    dispatch(setUsersData(data.items))
}
