import React from "react";
import Header from "./Header";
import MessageView from "./MessageView";
import FriendList from "./FriendList";

function ChatOnBoard() {
  return (
    <div className="d-flex w-100">
      <FriendList />
      <div className="chat-on-board w-100">
        <Header />
        <MessageView />
      </div>
    </div>
  );
}

export default ChatOnBoard;
