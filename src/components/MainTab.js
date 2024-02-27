import React from "react";
import { NavLink } from "react-router-dom";
import { BsChatTextFill  } from "react-icons/bs";
import { MdOutlinePermContactCalendar,MdOutlineCloud  } from "react-icons/md";
import { FaRegSquareCheck } from "react-icons/fa6";
import { IoBagHandle } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";

function MainTab() {
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
            <div className="navlink selected">
              <NavLink to="/">
                <BsChatTextFill className="nav-icon" />
              </NavLink>
            </div>
            <div className="navlink ">
              <NavLink to="/contact">
                <MdOutlinePermContactCalendar className="nav-icon" />
              </NavLink>
            </div>
            <div className="navlink ">
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
            <div className="navlink ">
              <NavLink to="/setting">
                <IoMdSettings className="nav-icon" />
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainTab;
