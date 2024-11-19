import React from "react";
import { NavLink } from "react-router-dom";
import * as styles from './sidebar.module.css'

const Sidebar = () => {
    return (
        <div className={styles.sidebar__wrapper}>
            <div className="styles.sidebar__logo">
                place for logo
            </div>
            <div>
                <input placeholder="Search for..." />
            </div>
            <div>

            </div>
            <ul>
                <li>
                    <NavLink to = '/profile'> Profile </NavLink>
                </li>
                <li>
                    <NavLink to = '/messages'> Messages </NavLink>
                </li>
                <li>
                    <NavLink to = '/settings'> Settings </NavLink>
                </li>
                <li>
                    <NavLink to = '/users'> Users </NavLink>
                </li>
                <li>
                    <NavLink to = '/login'> Login </NavLink>
                </li>
            </ul>
        </div>
    )
}
export default Sidebar;