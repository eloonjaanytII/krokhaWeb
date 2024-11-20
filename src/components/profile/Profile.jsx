import React from "react";
import CommonInfo from "./CommonInfo/CommonInfo";
import PersonInfo from "./PersonInfo/PersonInfo";
import PhotoStatus from "./photoStatus/photoStatus";
import UserPosts from "./UserPosts/UserPosts";
import * as styles from "./profile.module.css"

const Profile = (props) => {
    return (
        <div className={styles.profile__wrapper}>
            <CommonInfo />
            <PersonInfo />
            <PhotoStatus />
            <UserPosts />
        </div>
    )
}

export default Profile;