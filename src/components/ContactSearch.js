import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import ModalAddFriend from "./ModalAddFriend";
import ModalAddGroup from "./ModalAddGroup";

function ContactSearch() {
  return (
    <div className="contact-search">
      <div className="group-search">
        <IoSearchOutline className="contact-search-icon" />
        <input id="contact-search-input" type="text" placeholder="Tìm kiếm" />
      </div>
      <ModalAddFriend/>
      <ModalAddGroup/>
    </div>
  );
}

export default ContactSearch;
