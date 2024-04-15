import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import MessageView from "./MessageView";
import axios from "axios";
import { useDispatch } from "react-redux";
import { reRender } from "../redux/RenderReducer";

function MessageItem({ showMessageViewHandler, data }) {
  const dispatch = useDispatch();

  const handleClick = () => {
    showMessageViewHandler();
  };


  // Nhận data là conversations được get từ DB
  console.log("Data:", data);

  const [Friends, setFriends] = useState([]);
  //  const Friends = localStorage.getItem("Friends");


  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("User"))
    console.log("User:", user);
    console.log("User_id:", user.user._id);
    const user_id = user.user._id;
    const fetchFriends = async () => {
      const token = localStorage.getItem("token");


      const response = await fetch('http://localhost:5000/user/find/' + user_id,
        {
          method: 'GET', // hoặc 'POST', 'PUT', 'DELETE', etc.
          headers: {
            'Authorization': `Bearer ${token}` // Chỉ định token trong header Authorization
          }
        })
      if (response.ok) {
        const data = await response.json();
        if (data) {
          setFriends(data.friends)
        } else {
          console.log("Error");
        }
      }
    }
    fetchFriends();
    //  
  }, []);
  console.log("Friends:", Friends);

  // Hàm lấy friend id từ người nhận và người gửi để lấy conversation
  const showDetailFriend = (friend_id) => {

    const friend = Friends.find((item) => item._id === friend_id);

    // truyền Friend vào param qua header để header lấy thông tin friend
    localStorage.setItem("Friend", JSON.stringify(friend));
    dispatch(reRender());
  }




  return (
    <>
      {Array.isArray(Friends) && Friends.length > 0 && Friends.map((item) => {
        return (
          <div className="message-item" onClick={handleClick} key={item._id}>
            <div className="d-flex align-items-center justify-content-center">
              <div className="avatar-contact">
                <img
                  src={
                    item?.avatar === "https://example.com/cute-pusheen.jpg"
                      ? "images/avatar-default.jpg"
                      : item?.avatar
                  }
                  onClick={() => showDetailFriend(item._id)}
                  alt=""
                  className="avatar-img"
                />
              </div>
              <div>
                <div className="name-contact" onClick={() => showDetailFriend(item._id)}>{item?.username}</div>
                <div className="content-contact">
                  {Array.isArray(item.messages) && item.messages.length > 0 ? item.messages[item.messages.length - 1].message : ''}
                </div>
              </div>
            </div>
            <div className="time-contact">
              {Array.isArray(item.messages) && item.messages.length > 0 ? new Date(item.messages[item.messages.length - 1].createdAt).toLocaleString() : ''}
            </div>
          </div>
        );
      })}

    </>
  );

}

export default MessageItem;
