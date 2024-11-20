import React from "react";
import BuddyInfo from "./buddyInfo/BuddyInfo";
import MainChat from "./mainChat/MainChat";
import SendAbility from "./sendAbility/SendAbility";

const OwnerChat = (props) => {
    return (
        <div>
            <BuddyInfo />
            <MainChat />
            <SendAbility />
        </div>
    )
}


export default OwnerChat;