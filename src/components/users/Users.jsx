import React, { useEffect } from "react";
import CommonInfo from "./commonInfo/CommonInfo";
import UsersList from "./usersList/UsersList";
import PaginatorUsers from "./paginatorUsers/PaginatorUsers";
import { useDispatch, useSelector } from "react-redux";
import { getUsers, onChangedPage } from "../../redux/thunks/usersThunk";



const Users = () => {

    const dispatch = useDispatch()

    const totalUserCount = useSelector(state => state.users.totalUserCount)
    const usersData = useSelector(state => state.users.usersData)
    const pageSize = useSelector(state => state.users.pageSize)
    const portionSize = useSelector(state => state.users.portionSize)
    const currentPage = useSelector(state => state.users.currentPage)


    useEffect( () => {
        dispatch(getUsers(currentPage, pageSize))
        
    }, [dispatch, currentPage, pageSize])

    const onChangePage = (pageNumber) => {
        dispatch(onChangedPage(pageNumber, pageSize))
    }

    return(
        <div className = "users__wrapper">
            <CommonInfo totalUserCount = {totalUserCount} />
            <UsersList usersData = {usersData}/>
            <PaginatorUsers pageSize = {pageSize}
                       totalUserCount = {totalUserCount}
                       portionSize = {portionSize}
                       currentPage = {currentPage}
                       onChangePage = {onChangePage}/>
        </div>
    )
};

export default Users;