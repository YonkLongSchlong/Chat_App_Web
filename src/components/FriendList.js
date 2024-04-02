import React, { useState } from "react";
import ContactSearch from "./ContactSearch";
import { IoIosMore } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import MessageItem from "./MessageItem";

function FriendList({ showMessageViewHandler }) {
  const [selectedItem, setSelectedItem] = useState("all");
  const handleItemClick = (item) => {
    setSelectedItem(item);
  };
  return (
    <div className="contain">
      <ContactSearch />
      <div className="filter">
        <div>
          <span
            className={`all-contact ${
              selectedItem === "all" ? "selected-filter" : ""
            }`}
            onClick={() => handleItemClick("all")}
          >
            Tất cả
          </span>
          <span
            className={`un-read ${
              selectedItem === "unread" ? "selected-filter" : ""
            }`}
            onClick={() => handleItemClick("unread")}
          >
            Chưa đọc
          </span>
        </div>
        <div className="d-flex align-items-center justify-content-center">
          <div className=" group-filter-type">
            <span className="filter-type">Phân loại</span>
            <IoIosArrowDown className="filter-type-icon" />
          </div>
          <IoIosMore className="filter-more-icon" />
        </div>
      </div>
      {selectedItem === "all" && (
        <>
          <MessageItem showMessageViewHandler={showMessageViewHandler} />
          <MessageItem showMessageViewHandler={showMessageViewHandler} />
          <MessageItem showMessageViewHandler={showMessageViewHandler} />
          <MessageItem showMessageViewHandler={showMessageViewHandler} />
        </>
      )}
      {selectedItem === "unread" && (
        <>
          <MessageItem showMessageViewHandler={showMessageViewHandler} />
          <MessageItem showMessageViewHandler={showMessageViewHandler} />
        </>
      )}
    </div>
  );
}

export default FriendList;
