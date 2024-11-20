import React from "react";
import photoTotalUsers from "./../../../assets/images/GroupTotalUsers.svg"
import photoTopUsers from "./../../../assets/images/GroupTopUsers.svg"
import photoOthersUsers from "./../../../assets/images/GroupOthersUsers.svg"
import photoNewUsers from "./../../../assets/images/GroupNewUsers.svg"

const CommonInfo = ({totalUserCount}) => {
    return(
        <div className="common__wrapper">
            <div className = "common__item">
                    <img src = {photoTotalUsers} alt = "icon" />
                    <h1>Total Users</h1>
                    <p>{totalUserCount}</p>
            </div>
            <div className = "common__item">
                <img src = {photoNewUsers} alt = "icon" />
                <h1>New Users</h1>
                <p>{totalUserCount}</p>
            </div>
            <div className = "common__item">
                <img src = {photoTopUsers} alt = "icon" />
                <h1>Top Users</h1>
                <p>{totalUserCount}</p>
            </div>
            <div className = "common__item">
                <img src = {photoOthersUsers} alt = "icon" />
                <h1>Other Users</h1>
                <p>{totalUserCount}</p>
            </div>
        </div>
    )
};

export default CommonInfo;