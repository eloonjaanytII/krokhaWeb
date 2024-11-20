import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
    return (
        <div>
            <div className="sidebar__logo">
                KolyanWeb
            </div>
            <div className="sidebar__input">
                <input placeholder="Button is on vacation..." />
            </div>
            <div className="sidebar__menu">
                <ul>
                    <li className="sidebar__link">
                        <NavLink to='/profile'> Profile </NavLink>
                    </li>
                    <li className="sidebar__link">
                        <NavLink to='/messages'> Messages </NavLink>
                    </li>
                    <li className="sidebar__link">
                        <NavLink to='/settings'> Settings </NavLink>
                    </li>
                    <li className="sidebar__link">
                        <NavLink to='/users'> Users </NavLink>
                    </li>
                    <li className="sidebar__link">
                        <NavLink to='/login'> Login </NavLink>
                    </li>
                </ul>
            </div>

        </div>
    )
}
export default Sidebar;