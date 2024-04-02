import React from "react";
import ModalProfileDetail from "./ModalProfileDetail";

function ModalProfile() {
  return (
    <div className="modal-profile">
      <div className="profile-name">Trần Văn Bình</div>
      <ModalProfileDetail/>
      <div className="profile-item ">Cài đặt</div>
      <div className="profile-item profile-logout">Đăng xuất</div>
    </div>
  );
}

export default ModalProfile;
