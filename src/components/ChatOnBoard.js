import React, { useState } from "react";
import Header from "./Header";
import MessageView from "./MessageView";
import FriendList from "./FriendList";
import HomePageSlider from "./HomePageSlider";

function ChatOnBoard() {
  const [showMessageView, setShowMessageView] = useState(false);

  const showMessageViewHandler = () => {
    setShowMessageView(true);
  };
  return (
    <div className="d-flex w-100">
      <FriendList showMessageViewHandler={showMessageViewHandler} />
      <div className="chat-on-board w-100">
        {showMessageView ? (
          <div>
            <Header />
            <MessageView />
          </div>
        ) : (
          <div>
            <div className="content-slider">
              <div>
                Chào mừng đến với <span className="zalo-pc-text">Zalo PC</span>
              </div>
              <div>
                Khám phá những tiện ích hỗ trợ làm việc và trò chuyện cùng người
                thân, bạn bè được tối ưu hóa cho máy tính của bạn
              </div>
            </div>
            <HomePageSlider className="slider-wrapper" />
          </div>
        )}
      </div>

      {/* <div className="chat-on-board w-100">
        <Header />
        <MessageView />
      </div> */}
    </div>
  );
}

export default ChatOnBoard;
