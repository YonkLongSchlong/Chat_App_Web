import React from "react";
import { AiOutlineLike } from "react-icons/ai";
import { LuSticker } from "react-icons/lu";
import { CiImageOn } from "react-icons/ci";
import { TiAttachment } from "react-icons/ti";
import { BiScreenshot } from "react-icons/bi";
import { TiBusinessCard } from "react-icons/ti";
import { CiAlarmOn } from "react-icons/ci";
import { MdAssignmentTurnedIn } from "react-icons/md";
import { MdFormatShapes } from "react-icons/md";
import { FaExclamation } from "react-icons/fa6";
import { BiMessageRoundedEdit } from "react-icons/bi";
import { FaRegFaceGrin } from "react-icons/fa6";
import { SlLike } from "react-icons/sl";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllConversations } from "../features/message/messageSlice";
import { useState } from "react";




function MessageView() {
  const userState = useSelector((state) => state?.user?.user?.user || state?.user?.user);
  const dispatch = useDispatch();

  const [message, setMessage] = useState([]);
  const render = useSelector((state) => state.render.renderResult);

  useEffect(() => {
    const friend = JSON.parse(localStorage.getItem("Friend"));
    const token = localStorage.getItem("token");
    console.log("Friend:", friend);
    fetch('http://localhost:5000/messages/' + friend._id,
    {
      method: 'GET', // hoặc 'POST', 'PUT', 'DELETE', etc.
      headers: {
        'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NjE2Mjk0ZWNlMjA5YTEyZmUwZjFmZWEiLCJpYXQiOjE3MTI4NTcwMTUsImV4cCI6MTcxMjg1NzA0NX0.Mw7_PtE9Cvtd-FHCYFh3DmHitjxpPudzf3WwqNg0CxE` // Chỉ định token trong header Authorization
      }
    })
      .then(response => response.json())
      .then(json => setMessage(json))
      
  }, [userState?._id, render]);

  // Chỉ gọi lại khi userState._id thay đổi
 
  return (
    <div className="container-message">
      <div className="message-view">
        {/* <div className="chat-item">
          <div className="chat-avatar">
            <img
              src="https://s120-ava-talk.zadn.vn/4/4/a/2/1/120/9207b2750ba3206d04791ae71ad00a1e.jpg"
              alt=""
              className="chat-avatar-img"
            />
          </div>
          <div className="chat-content">
            <div className="card">
              <div className="chat-message">Chúc mừng năm mới</div>
              <div className="time-chat-message">00:01</div>
              <div className="message-reaction">
                <AiOutlineLike />
              </div>
            </div>
          </div>
        </div>
        <div className="chat-item-me">
          <div className="card">
            <div className="chat-message">Chúc mừng năm mới</div>
            <div className="time-chat-message">00:01</div>
          </div>
        </div> */}
        {message && message.length > 0 && message.map((item) => {
          return (
            <div className="chat-item" key={item._id}>
              <div className="chat-avatar">
                <img
                  src={{}}
                  alt=""
                  className="chat-avatar-img"
                />
              </div>
              <div className="chat-content">
                <div className="card">
                  <div className="chat-message">{item.text}</div>
                  <div className="time-chat-message">00:01</div>
                  <div className="message-reaction">
                    <AiOutlineLike />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
  
      </div>
      <div className="toolbar">
        <div className="toolbar-icon icon">
          <LuSticker className="header-icon-image" />
        </div>
        <div className="toolbar-icon icon">
          <CiImageOn className="header-icon-image" />
        </div>
        <div className="toolbar-icon icon">
          <TiAttachment className="header-icon-image" />
        </div>
        <div className="toolbar-icon icon">
          <BiScreenshot className="header-icon-image" />
        </div>
        <div className="toolbar-icon icon">
          <TiBusinessCard className="header-icon-image" />
        </div>
        <div className="toolbar-icon icon">
          <CiAlarmOn className="header-icon-image" />
        </div>
        <div className="toolbar-icon icon">
          <MdAssignmentTurnedIn className="header-icon-image" />
        </div>
        <div className="toolbar-icon icon">
          <MdFormatShapes className="header-icon-image" />
        </div>
        <div className="toolbar-icon icon">
          <FaExclamation className="header-icon-image" />
        </div>
      </div>
      <div className="chat-input-container d-flex align-items-center ">
        <input
          placeholder="Nhập tin nhắn..."
          type="text"
          className="chat-input"
        />
        <div className="d-flex align-items-center justify-content-center">
          <div className="chat-input-icon icon">
            <BiMessageRoundedEdit className="header-icon-image" />
          </div>
          <div className="chat-input-icon icon">
            <FaRegFaceGrin className="header-icon-image" />
          </div>
          <div className="chat-input-icon icon">
            <span>@</span>
          </div>
          <div className="chat-input-icon icon">
            <SlLike className="header-icon-image" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MessageView;
