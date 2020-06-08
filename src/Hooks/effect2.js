import React, { useState, useEffect } from "react";
import ChatAPI from "./ChatAPI";

function FriendStatusWithCounter(props) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [count]);

  const [isOnline, setIsOnline] = useState(null);
  useEffect(() => {
    ChatAPI.subscribeToFriendStatus(props.friendID, handleStatusChange);
    return () => {
      ChatAPI.unsubscribeFromFriendStatus(props.friendID, handleStatusChange);
    };
  }, [props.friendID]);

  function handleStatusChange(status) {
    setIsOnline(status);
  }

  if (isOnline === null) {
    return "Loading...";
  }

  return (
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>Click me</button>
        <p>{props.friendID} {isOnline ? "Online" : "Offline"}</p>
        {/*{isOnline.toString()}*/}
      </div>
  );
}

function FriendStatusWithCounterUI(props) {
  const [friendID, setFriend] = useState(getNewFriendID());
  function getNewFriendID(){
    return (new Date()).getTime();
  }

  return (
      <div>
        <FriendStatusWithCounter friendID={friendID} />
        <button onClick={() => setFriend(getNewFriendID())}>change friend</button>
      </div>
  )
}

export default FriendStatusWithCounterUI;