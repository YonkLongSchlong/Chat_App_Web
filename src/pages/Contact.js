import React from "react";
import ContactSearch from "../components/ContactSearch";
import { BsLayoutSidebarReverse } from "react-icons/bs";
import { IoSearchOutline } from "react-icons/io5";

function Contact() {
  return (
    <div className="contact">
      <div className="menu-contact">
        <ContactSearch />
        <div className="contact-list">
          <div className="contact-item">
            <BsLayoutSidebarReverse />
            <span>Danh sách bạn bè</span>
          </div>
          <div className="contact-item">
            <BsLayoutSidebarReverse />
            <span>Danh sách bạn bè</span>
          </div>
          <div className="contact-item">
            <BsLayoutSidebarReverse />
            <span>Danh sách bạn bè</span>
          </div>
        </div>
      </div>
      <div className="main-contact">
        <div className="main-contact-header">
          <BsLayoutSidebarReverse />
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
                  placeholder="Tìm kiếm"
                />
              </div>
              <div className="contact-filter-select">
                <IoSearchOutline />
                <div>Tên (A-Z)</div>
                <IoSearchOutline />
              </div>
              <div className="contact-filter-select">
                <IoSearchOutline  />
                <div>Tên (A-Z)</div>
                <IoSearchOutline />
              </div>
            </div>
            <span className="label">Bạn mới</span>
            <div className="friend-item"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
