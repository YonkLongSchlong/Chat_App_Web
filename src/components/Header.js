import React from "react";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { IoSearchOutline } from "react-icons/io5";
import { RiLiveLine } from "react-icons/ri";
import { BsLayoutSidebarReverse } from "react-icons/bs";
import { CiShoppingTag } from "react-icons/ci";
function Header() {
  return (
    <>
      <header className="header">
        <div className="d-flex align-items-center justify-content-center">
          <div className="avatar-contact">
            <img
              src="https://s120-ava-talk.zadn.vn/4/4/a/2/1/120/9207b2750ba3206d04791ae71ad00a1e.jpg"
              alt=""
              className="avatar-img"
            />
          </div>
          <div>
            <div className="name-contact-header">Lê Hoàng Minh Hiếu</div>
            <div className="access-hisory">
              <span className="access-history-text">Truy cập 4 giờ trước</span>
              <div className="border"></div>
              <div>
                <CiShoppingTag />
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex">
          <div className="header-icon icon">
            <AiOutlineUsergroupAdd className="header-icon-image" />
          </div>
          <div className="header-icon icon">
            <IoSearchOutline className="header-icon-image" />
          </div>
          <div className="header-icon icon">
            <RiLiveLine className="header-icon-image" />
          </div>
          <div className="header-icon icon">
            <BsLayoutSidebarReverse className="header-icon-image" />
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
