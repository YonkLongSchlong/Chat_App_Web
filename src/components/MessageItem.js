import React from "react";

function MessageItem({ showMessageViewHandler }) {
  const handleClick = () => {
    showMessageViewHandler();
  };
  return (
    <div className="message-item" onClick={handleClick}>
      <div className="d-flex align-items-center justify-content-center">
        <div className="avatar-contact">
          <img
            src="https://s120-ava-talk.zadn.vn/4/4/a/2/1/120/9207b2750ba3206d04791ae71ad00a1e.jpg"
            alt=""
            className="avatar-img"
          />
        </div>
        <div>
          <div className="name-contact">Lê Hoàng Minh Hiếu</div>
          <div className="content-contact">Bạn: Chúc mừng năm mới</div>
        </div>
      </div>
      <div className="time-contact">10/02</div>
    </div>
  );
}

export default MessageItem;
