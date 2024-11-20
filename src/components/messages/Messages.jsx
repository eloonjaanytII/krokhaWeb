import React from "react";
import OwnerMessages from "./ownerMessages/OwnerMessages";
import OwnerUsers from "./ownerUsers/OwnerUsers";
import OwnerChat from "./OwnerChat/OwnerChat";

const Messages = (props) => {
    return (
        <div>
            <OwnerUsers />
            <OwnerMessages />
            <OwnerChat />
        </div>
    )
}

export default Messages;