import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { BsChatTextFill } from "react-icons/bs";
import { MdOutlinePermContactCalendar, MdOutlineCloud } from "react-icons/md";
import { FaRegSquareCheck } from "react-icons/fa6";
import { IoBagHandle } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";
import ModalSetting from "./ModalSetting";


function MainTab() {
  const [selectedItem, setSelectedItem] = useState("message");
  const handleItemClick = (item) => {
    setSelectedItem(item);
  };
  const [showModal, setShowModal] = useState(false);
  const handleSettingsClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <>
      <div className="main-tab">
        <div className="avatar">
          <img
            src="https://s120-ava-talk.zadn.vn/4/4/a/2/1/120/9207b2750ba3206d04791ae71ad00a1e.jpg"
            alt=""
            className="avatar-img"
          />
        </div>
        <div className="tab">
          <div className="top-tab">
            <div
              className={`navlink ${
                selectedItem === "message" ? "selected" : ""
              }`}
              onClick={() => handleItemClick("message")}
            >
              <NavLink to="/">
                <BsChatTextFill className="nav-icon" />
              </NavLink>
            </div>
            <div
              className={`navlink ${
                selectedItem === "contact" ? "selected" : ""
              }`}
              onClick={() => handleItemClick("contact")}
            >
              <NavLink to="/contact">
                <MdOutlinePermContactCalendar className="nav-icon" />
              </NavLink>
            </div>
            <div
              className={`navlink ${selectedItem === "todo" ? "selected" : ""}`}
              onClick={() => handleItemClick("todo")}
            >
              <NavLink to="/todo">
                <FaRegSquareCheck className="nav-icon" />
              </NavLink>
            </div>
          </div>
          <div className="bottom-tab">
            <div className="navlink ">
              <NavLink to="/">
                <MdOutlineCloud className="nav-icon" />
              </NavLink>
            </div>
            <div className="navlink ">
              <NavLink to="/">
                <IoBagHandle className="nav-icon" />
              </NavLink>
            </div>
            <div className="navlink " onClick={handleSettingsClick}>
              <IoMdSettings className="nav-icon" />
            </div>
          </div>
        </div>
        {showModal && <ModalSetting closeModal={handleCloseModal} />}
      </div>
      
    </>
  );
}

export default MainTab;
