import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { LuPencilLine } from "react-icons/lu";
import { MdOutlineCameraAlt } from "react-icons/md";

function ModalProfileDetail() {
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
  }
  const handleShow = () => {
    setShow(true);
  };
  return (
    <>
      <div className="profile-item" onClick={handleShow}>
        Hồ sơ của bạn
      </div>

      <Modal show={show} onHide={handleClose} className="modal-profile-detail">
        <Modal.Header closeButton>
          <Modal.Title className="label-add-contact">
            Thông tin tài khoản
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="content-profile-detail">
            <img
              src="https://res-zalo.zadn.vn/upload/media/2019/9/18/28_1568803270858_25195.jpg"
              alt="bg-avatar"
              className="bg-avatar"
            />
          </div>
          <div className="profile-info-container">
            <div className="profile-info-avatar">
              <img
                src="https://s120-ava-talk.zadn.vn/4/4/a/2/1/120/9207b2750ba3206d04791ae71ad00a1e.jpg"
                alt=""
                className="profile-info-avatar-img"
              />
            </div>
            <div className="profile-info-name">Trần Văn Bình</div>
            <div className="profile-icon-update">
              <LuPencilLine />
            </div>
            <div className="profile-camera">
              <MdOutlineCameraAlt className="profile-camera-icon" />
            </div>
          </div>
          <div className="profile-card-info">
            <div className="profile-card-info-heading">Thông tin cá nhân</div>
            <div className="profile-card-info-wrapper">
              <div className="profile-card-info-label">Giới tính</div>
              <div className="profile-card-info-content">Nam</div>
            </div>
            <div className="profile-card-info-wrapper">
              <div className="profile-card-info-label">Ngày sinh</div>
              <div className="profile-card-info-content">29 tháng 02, 2003</div>
            </div>
            <div className="profile-card-info-wrapper">
              <div className="profile-card-info-label">Điện thoại</div>
              <div className="profile-card-info-content">+84 375 926 965</div>
            </div>
            <span className="profile-card-info-label">
              Chỉ bạn bè có lưu số máy của bạn trong danh bạ mới xem được số này
            </span>
          </div>
        </Modal.Body>
        <Modal.Footer className="profile-card-modal-footer">
          <div className="profile-card-btn-update">
            <div className="profile-btn-update-icon">
              <LuPencilLine className="icon-img" />
            </div>
            Cập nhật
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalProfileDetail;
