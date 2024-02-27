import React from "react";
import ContactSearch from "./ContactSearch";
import { IoIosMore } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import MessageItem from "./MessageItem";

function Container() {
  return (
    <div className="contain">
      <ContactSearch />
      <div className="filter">
        <div>
          <span className="all-contact">Tất cả</span>
          <span className="un-read">Chưa đọc</span>
        </div>
        <div className="d-flex align-items-center justify-content-center">
          <div className=" group-filter-type">
            <span className="filter-type">Phân loại</span>
            <IoIosArrowDown className="filter-type-icon"/>
          </div>
          <IoIosMore className="filter-more-icon"/>
        </div>
      </div>
      <MessageItem/>
      <MessageItem/>
      <MessageItem/>
      <MessageItem/>
      
    </div>
  );
}

export default Container;
