import React, { useState, useEffect } from 'react';
import ChatAPI from "./ChatAPI";


//一個自定義的 Hook 是以「use」為開頭命名的 JavaScript function
function useFriendStatus(friendID) {
    const [isOnline, setIsOnline] = useState(null);

    useEffect(() => {
        function handleStatusChange(status) {
            setIsOnline(status);
        }

        ChatAPI.subscribeToFriendStatus(friendID, handleStatusChange);
        return () => {
            ChatAPI.unsubscribeFromFriendStatus(friendID, handleStatusChange);
        };
    });

    return isOnline;
}

function FriendStatus(props) {
    const isOnline = useFriendStatus(props.friendID);

    if (isOnline === null) {
        return 'Loading...';
    }
    return isOnline ? 'Online' : 'Offline';
}

function FriendListItem(props) {
    const isOnline = useFriendStatus(props.friendID);

    return (
        <li style={{ color: isOnline ? 'green' : 'red' }}>
            {props.friendID}
        </li>
    );
}

function FriendStatusUI() {
    const [friendID, setFriend] = useState(getNewFriendID());
    function getNewFriendID(){
        return (new Date()).getTime();
    }

    return (
        <div>
            <FriendStatus friendID={friendID} />
            <FriendListItem friendID={friendID} />
            <button onClick={() => setFriend(getNewFriendID())}>change friend</button>
        </div>
    )
}

export default FriendStatusUI;