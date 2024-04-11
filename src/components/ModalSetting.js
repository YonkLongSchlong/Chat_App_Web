import React from "react";
import { IoPersonOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { MdKeyboardArrowRight } from "react-icons/md";
import { GoDatabase } from "react-icons/go";
import { FiTool } from "react-icons/fi";
import { MdLanguage } from "react-icons/md";
import { IoIosInformationCircleOutline } from "react-icons/io";
import ModalLogout from "./ModalLogout";

function ModalSetting({ handleCloseSettingModal, handleCloseModalProfile }) {
  return (
    <div className="modal-setting">
      <div className="setting-item">
        <IoPersonOutline className="setting-item-icon" />
        <div className="setting-item-name">Thông tin tài khoản</div>
      </div>
      <div className="setting-item">
        <IoSettingsOutline className="setting-item-icon" />
        <div className="setting-item-name">Cài đặt</div>
      </div>
      <div className="setting-item">
        <GoDatabase className="setting-item-icon" />
        <div className="setting-item-name">Dữ liệu</div>
        <MdKeyboardArrowRight className="setting-item-icon" />
      </div>
      <div className="setting-item">
        <FiTool className="setting-item-icon" />
        <div className="setting-item-name">Công cụ</div>
        <MdKeyboardArrowRight className="setting-item-icon" />
      </div>
      <div className="setting-item">
        <MdLanguage className="setting-item-icon" />
        <div className="setting-item-name">Ngôn ngữ</div>
        <MdKeyboardArrowRight className="setting-item-icon" />
      </div>
      <div className="setting-item">
        <IoIosInformationCircleOutline className="setting-item-icon" />
        <div className="setting-item-name">Giới thiệu</div>
        <MdKeyboardArrowRight className="setting-item-icon" />
      </div>
      <ModalLogout
        handleCloseSettingModal={handleCloseSettingModal}
        handleCloseModalProfile={handleCloseModalProfile}
      />
    </div>
  );
}

export default ModalSetting;
