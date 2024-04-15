import React, { useState, useEffect } from "react";
import ContactSearch from "./ContactSearch";
import { IoIosMore } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import MessageItem from "./MessageItem";
import {useDispatch, useSelector} from "react-redux";
import { getAllConversations } from "../features/message/messageSlice";

function FriendList({ showMessageViewHandler }) {
  const [selectedItem, setSelectedItem] = useState("all");
  const handleItemClick = (item) => {
    setSelectedItem(item);
  };
  const userState = useSelector((state) => state?.user?.user?.user || state?.user?.user);
  const dispatch = useDispatch();
  const getConversationsFromDb = () => {
    if (userState?._id) {
      dispatch(getAllConversations(userState._id));
    }
  };

  useEffect(() => {
    if(userState?._id !==null){
      getConversationsFromDb();
    }
  }, [userState?._id]);     // Chỉ gọi lại khi userState._id thay đổi

  const conversationState = useSelector((state) => state?.message?.getAllConversations);
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
      {/* {selectedItem === "all" && (
        <>
          <MessageItem data={conversationState ? conversationState : []}/>
        </>
      )}
      {selectedItem === "unread" && (
        <>
          <MessageItem data={conversationState ? conversationState : []}/>
        </>
      )} */}
      {selectedItem === "all" && (
  <>
    <MessageItem 
      data={conversationState ? conversationState : []} 
     showMessageViewHandler={showMessageViewHandler}
    />
  </>
)}
{selectedItem === "unread" && (
  <>
    <MessageItem 
      data={conversationState ? conversationState : []} 
      showMessageViewHandler={showMessageViewHandler}
    />
  </>
)}
    </div>
  );
}

export default FriendList;
