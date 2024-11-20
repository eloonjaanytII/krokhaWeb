import React from "react";
import { NavLink } from "react-router-dom";
import userPhoto from "./../../../assets/images/astronaut.png"
import statusPhoto from "./../../../assets/images/status_icon.svg"
import usersPhoto from "./../../../assets/images/Users_icon.svg"
import mapPhoto from "./../../../assets/images/map_icon.svg"



const UsersList = ({ usersData }) => {
    return (
        <div className="usersList__wrapper">
            <div className="usersList__header">
                <h1>All Users</h1>
            </div>
            <table className="usersList__table">
                <thead>
                    <tr>
                        <th>
                        <img src = {usersPhoto} alt = "icon"/>Photos
                        </th>
                        <th>
                        <img src = {usersPhoto} alt = "icon"/>Name
                            </th>
                        <th>
                        <img src = {mapPhoto} alt = "icon"/>Id
                            </th>
                        <th>
                        <img src = {statusPhoto} alt = "icon"/>Status
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        usersData.map((u) => (
                            <tr key={u.id}>
                                <td>
                                    <div class="user-avatar">
                                        <NavLink to={'/profile/' + u.id}>
                                            <img src={u.photos.small || userPhoto} alt="pikcha" />
                                        </NavLink>
                                    </div>
                                </td>
                                <td>
                                    <p className="user_name">{u.name}</p>
                                </td>
                                <td>
                                    <p className="user_id">{u.id}</p>
                                </td>
                                <td>

                                    <p className="user_status">{u.status || "in thought..."}</p>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
};

export default UsersList;