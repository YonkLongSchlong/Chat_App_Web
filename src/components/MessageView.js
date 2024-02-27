import React from "react";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { IoSearchOutline } from "react-icons/io5";
import { RiLiveLine } from "react-icons/ri";
import { BsLayoutSidebarReverse } from "react-icons/bs";
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

function MessageView() {
  return (
    <div className="container-message">
      <div className="message-view">
        <div className="chat-item">
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
        </div>
        <div className="chat-item">
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
        <div className="chat-item">
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
          placeholder="Nhập @, tin nhắn gửi đến Lê Hoàng Minh Hiếu"
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
