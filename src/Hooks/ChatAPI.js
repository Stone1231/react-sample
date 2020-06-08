export default class ChatAPI {
    static subscribeToFriendStatus(id, fun) {
        fun(true);
        alert(id + " online");
    }
    static unsubscribeFromFriendStatus(id, fun) {
        fun(false);
        alert(id + " offline");
    }
}