import React from "react";
import ChatAPI from "./ChatAPI";

class FriendStatusWithCounter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {count: 0, isOnline: null};
        this.handleStatusChange = this.handleStatusChange.bind(this);
    }

    componentDidMount() {
        document.title = `You clicked ${this.state.count} times`;
        ChatAPI.subscribeToFriendStatus(
            this.props.friendID,
            this.handleStatusChange
        );
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.count !== this.state.count) {
            document.title = `You clicked ${this.state.count} times`;
        }

        if (prevState.isOnline != null && prevProps.friendID!==this.props.friendID) {
            // 從先前的 friend.id 取消訂閱
            ChatAPI.unsubscribeFromFriendStatus(
                prevProps.friendID,
                this.handleStatusChange
            );

            // 訂閱下一個 friend.id
            ChatAPI.subscribeToFriendStatus(
                this.props.friendID,
                this.handleStatusChange
            );
        }
    }

    componentWillUnmount() {
        ChatAPI.unsubscribeFromFriendStatus(
            this.props.friendID,
            this.handleStatusChange
        );
    }

    handleStatusChange(status) {
        this.setState({
            isOnline: status
        });
    }
    render() {
        if (this.state.isOnline === null) {
            alert(this.state.isOnline);
            return "Loading...";
        }//好像無效？？

        return (
            <div>
                <p>You clicked {this.state.count} times</p>
                <button onClick={() => this.setState({count:this.state.count + 1})}>Click me</button>
                <p>{this.props.friendID} {this.state.isOnline ? "Online" : "Offline"}</p>
            </div>
        )
    }
}

class FriendStatusWithCounterUI extends React.Component {
    constructor(props) {
        super(props);
        this.state = { friendID: this.getNewFriendID() };
        this.friendID = { date: new Date() };
    }

    getNewFriendID(){
        return (new Date()).getTime();
    }

    setNewFriendID(){
        this.setState({friendID:this.getNewFriendID()})
    }

    render() {
        return (
            <div>
                <FriendStatusWithCounter friendID={this.state.friendID} />
                <button onClick={() => this.setNewFriendID()}>change friend</button>
            </div>
        )
    }
}

export default FriendStatusWithCounterUI;