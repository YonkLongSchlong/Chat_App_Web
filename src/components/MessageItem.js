import React from "react";

function MessageItem({ showMessageViewHandler, data }) {
  const handleClick = () => {
    showMessageViewHandler();
  };
  // Nhận data là conversations được get từ DB
  console.log("Data:", data);

  return (
    <>
      {data.map((item, index) => {
        return (
          <div className="message-item" onClick={handleClick}>
            <div className="d-flex align-items-center justify-content-center">
              <div className="avatar-contact">
                <img
                  src={
                    item?.participants[item.participants.length - 1].avatar ===
                    "https://example.com/cute-pusheen.jpg"
                      ? "images/avatar-default.jpg"
                      : item?.participants[item.participants.length - 1].avatar
                  }
                  alt=""
                  className="avatar-img"
                />
              </div>
              <div>
                <div className="name-contact">{item?.name}</div>
                <div className="content-contact">
                  {item?.messages[item.messages.length - 1].message}
                </div>
              </div>
            </div>
            <div className="time-contact">
              {new Date(
                item?.messages[item.messages.length - 1].createdAt
              ).toLocaleString()}
            </div>
          </div>
        );
      })}
    </>
  );
}

export default MessageItem;
