import React, { useState } from "react";
import ContactSearch from "../components/ContactSearch";
import { IoSearchOutline } from "react-icons/io5";
import { IoIosMore } from "react-icons/io";
import { BsSortAlphaDown } from "react-icons/bs";
import { FiFilter } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import { LuMailOpen } from "react-icons/lu";
import { PiUserListBold } from "react-icons/pi";
import { RiGroupLine } from "react-icons/ri";
import { BsChatText } from "react-icons/bs";

function Contact() {
  const [selectedList, setSelectedList] = useState("friends");
  const [selectedItem, setSelectedItem] = useState("null");
  const handleListClick = (name) => {
    setSelectedList(name);
    setSelectedItem(name);
  };
  return (
    <div className="contact">
      <div className="menu-contact">
        <ContactSearch />
        <div className="contact-list">
          <div
            className={`contact-item ${
              selectedItem === "friends" ? "select" : ""
            }`}
            onClick={() => handleListClick("friends")}
          >
            <PiUserListBold className="contact-item-icon" />
            <span>Danh sách bạn bè</span>
          </div>
          <div
            className={`contact-item ${
              selectedItem === "groups" ? "select" : ""
            }`}
            onClick={() => handleListClick("groups")}
          >
            <RiGroupLine className="contact-item-icon" />
            <span>Danh sách nhóm</span>
          </div>
          <div
            className={`contact-item ${
              selectedItem === "invites" ? "select" : ""
            }`}
            onClick={() => handleListClick("invites")}
          >
            <LuMailOpen className="contact-item-icon" />
            <span>Lời mời kết bạn</span>
          </div>
        </div>
      </div>
      <div className="main-contact">
        {selectedList === "friends" && (
          <div>
            <div className="main-contact-header">
              <PiUserListBold className="contact-item-icon" />
              <span>Danh sách bạn bè</span>
            </div>
            <div className="card-list-wrapper">
              <div className="title">Bạn bè (84)</div>
              <div className="card-contact">
                <div className="contact-filter">
                  <div className="group-search">
                    <IoSearchOutline className="contact-search-icon" />
                    <input
                      id="contact-search-input"
                      type="text"
                      placeholder="Tìm bạn"
                    />
                  </div>
                  <div className="contact-filter-select">
                    <BsSortAlphaDown />
                    <div className="name-filter">Tên (A-Z)</div>
                    <IoIosArrowDown />
                  </div>
                  <div className="contact-filter-select">
                    <FiFilter />
                    <div className="name-filter">Tất cả</div>
                    <IoIosArrowDown />
                  </div>
                </div>
                <span className="label">Bạn mới</span>
                <div className="friend-item">
                  <div className="avatar-friend">
                    <img
                      src="https://s120-ava-talk.zadn.vn/4/4/a/2/1/120/9207b2750ba3206d04791ae71ad00a1e.jpg"
                      alt=""
                      className="avatar-img"
                    />
                  </div>
                  <div className="name">Name</div>
                  <div className="icon icon-more">
                    <IoIosMore className="icon-more-img" />
                  </div>
                </div>
                <span className="label">A</span>
                <div className="friend-item">
                  <div className="avatar-friend">
                    <img
                      src="https://s120-ava-talk.zadn.vn/4/4/a/2/1/120/9207b2750ba3206d04791ae71ad00a1e.jpg"
                      alt=""
                      className="avatar-img"
                    />
                  </div>
                  <div className="name">Name</div>
                  <div className="icon icon-more">
                    <IoIosMore className="icon-more-img" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {selectedList === "groups" && (
          <div>
            <div className="main-contact-header">
              <RiGroupLine className="contact-item-icon" />
              <span>Danh sách nhóm</span>
            </div>
            <div className="card-list-wrapper">
              <div className="title">Nhóm (59)</div>
              <div className="card-contact">
                <div className="contact-filter">
                  <div className="group-search">
                    <IoSearchOutline className="contact-search-icon" />
                    <input
                      id="contact-search-input"
                      type="text"
                      placeholder="Tìm kiếm ..."
                    />
                  </div>
                  <div className="contact-filter-select">
                    <BsSortAlphaDown />
                    <div className="name-filter">Hoạt động (mới - cũ)</div>
                    <IoIosArrowDown />
                  </div>
                  <div className="contact-filter-select">
                    <FiFilter />
                    <div className="name-filter">Tất cả</div>
                    <IoIosArrowDown />
                  </div>
                </div>
                <div className="group-item">
                  <div className="avatar-container">
                    <img
                      src="https://s120-ava-talk.zadn.vn/4/4/a/2/1/120/9207b2750ba3206d04791ae71ad00a1e.jpg"
                      alt=""
                      className="user-img"
                    />
                    <img
                      src="https://s120-ava-talk.zadn.vn/4/4/a/2/1/120/9207b2750ba3206d04791ae71ad00a1e.jpg"
                      alt=""
                      className="user-img"
                    />
                    <img
                      src="https://s120-ava-talk.zadn.vn/4/4/a/2/1/120/9207b2750ba3206d04791ae71ad00a1e.jpg"
                      alt=""
                      className="user-img"
                    />
                    <img
                      src="https://s120-ava-talk.zadn.vn/4/4/a/2/1/120/9207b2750ba3206d04791ae71ad00a1e.jpg"
                      alt=""
                      className="user-img"
                    />
                  </div>
                  <div className="namegroup-quantity">
                    <div className="namegroup">KTTKPM_T2_4_6_16B_HK2_23_24</div>
                    <div className="quantity">82 thành viên</div>
                  </div>
                  <div className="icon icon-more">
                    <IoIosMore className="icon-more-img" />
                  </div>
                </div>
                <div className="group-item">
                  <div className="avatar-container">
                    <img
                      src="https://s120-ava-talk.zadn.vn/4/4/a/2/1/120/9207b2750ba3206d04791ae71ad00a1e.jpg"
                      alt=""
                      className="user-img"
                    />
                    <img
                      src="https://s120-ava-talk.zadn.vn/4/4/a/2/1/120/9207b2750ba3206d04791ae71ad00a1e.jpg"
                      alt=""
                      className="user-img"
                    />
                    <img
                      src="https://s120-ava-talk.zadn.vn/4/4/a/2/1/120/9207b2750ba3206d04791ae71ad00a1e.jpg"
                      alt=""
                      className="user-img"
                    />
                    <img
                      src="https://s120-ava-talk.zadn.vn/4/4/a/2/1/120/9207b2750ba3206d04791ae71ad00a1e.jpg"
                      alt=""
                      className="user-img"
                    />
                  </div>
                  <div className="namegroup-quantity">
                    <div className="namegroup">KTTKPM_T2_4_6_16B_HK2_23_24</div>
                    <div className="quantity">82 thành viên</div>
                  </div>
                  <div className="icon icon-more">
                    <IoIosMore className="icon-more-img" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {selectedList === "invites" && (
          <div>
            <div className="main-contact-header">
              <LuMailOpen className="contact-item-icon" />
              <span>Lời mời kết bạn</span>
            </div>
            <div className="card-list-wrapper">
              <div className="title">Lời mời đã nhận (1)</div>
              <div className="card-wrapper">
                <div className="card-user">
                  <div className="card-avatar-container">
                    <img
                      src="https://s120-ava-talk.zadn.vn/4/4/a/2/1/120/9207b2750ba3206d04791ae71ad00a1e.jpg"
                      alt=""
                      className="card-avatar-img"
                    />
                  </div>
                  <div className="card-name">
                    <div className="name">Ánh Tv Học Viên</div>
                    <div className="time">26/12/23 - Từ số điện thoại</div>
                  </div>
                  <div className="go-to-chat">
                    <BsChatText className="icon-go-to-chat" />
                  </div>
                </div>
                <div className="card-message">
                  Xin chào mình là Ánh Tv Học Viên. Mình tìm thấy bạn bằng số
                  điện thoại. Kết bạn với mình nhé
                </div>
                <div className="card-cta">
                  <button className="btn btn-secondary">Từ chối</button>
                  <button className="btn btn-primary">Đồng ý</button>
                </div>
              </div>
              <div className="title">Đã gửi lời mời (1)</div>
              <div className="card-wrapper">
                <div className="card-user">
                  <div className="card-avatar-container">
                    <img
                      src="https://s120-ava-talk.zadn.vn/4/4/a/2/1/120/9207b2750ba3206d04791ae71ad00a1e.jpg"
                      alt=""
                      className="card-avatar-img"
                    />
                  </div>
                  <div className="card-name">
                    <div className="name">Ánh Tv Học Viên</div>
                    <div className="time">Bạn đã gửi lời mời</div>
                  </div>
                  <div className="go-to-chat">
                    <BsChatText className="icon-go-to-chat" />
                  </div>
                </div>
                <button className="btn btn-secondary btn-reject">Thu hồi lời mời</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Contact;
