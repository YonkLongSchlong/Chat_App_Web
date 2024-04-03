import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { LuPencilLine } from "react-icons/lu";
import { MdOutlineCameraAlt } from "react-icons/md";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { useSelector } from "react-redux";

function ModalProfileDetail({ handleCloseModalProfile }) {
  const [show, setShow] = useState(false);
  const handleClose = () => {
    handleCloseModalProfile();
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
  };

  const [stateOption, setStateOption] = useState(false);

  const handleOpenUpdate = () => {
    setStateOption(true);
  };

  const handleUndoUpdate = () => {
    setStateOption(false);
  };

  const userState = useSelector((state) => state.user.user.user);
  const avatarSrc =
    userState.avatar === "https://example.com/cute-pusheen.jpg"
      ? "images/avatar-default.jpg"
      : userState?.avatar;

  const dateString = userState.dob;
  const dateObject = new Date(dateString);

  const year = dateObject.getFullYear();
  const month = dateObject.getMonth() + 1; // Tháng bắt đầu từ 0
  const day = dateObject.getDate();

  const formattedDate = `${day} tháng ${month}, ${year}`;

  const [selectedGender, setSelectedGender] = useState(userState.gender);
  const handleGenderChange = (e) => {
    selectedGender(e.target.value);
  };

  const [dateOfBirth, setDateOfBirth] = useState(
    userState.dob ? userState.dob.split("T")[0] : ""
  );

  const handleDateChange = (event) => {
    setDateOfBirth(event.target.value);
  };

  return (
    <>
      <div className="profile-item" onClick={handleShow}>
        Hồ sơ của bạn
      </div>

      <Modal show={show} onHide={handleClose} className="modal-profile-detail">
        <Modal.Header closeButton>
          <Modal.Title className="label-add-contact">
            {stateOption === false ? (
              "Thông tin tài khoản"
            ) : (
              <div className="d-flex gap-3">
                <MdOutlineKeyboardArrowLeft
                  className="icon-back"
                  onClick={handleUndoUpdate}
                />
                <div className="label-add-contact">
                  Cập nhật thông tin cá nhân
                </div>
              </div>
            )}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {stateOption === false ? (
            <>
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
                    src={avatarSrc}
                    alt=""
                    className="profile-info-avatar-img"
                  />
                </div>
                <div className="profile-info-name">{userState?.username}</div>
                <div className="profile-icon-update" onClick={handleOpenUpdate}>
                  <LuPencilLine />
                </div>
                <div className="profile-camera">
                  <MdOutlineCameraAlt className="profile-camera-icon" />
                </div>
              </div>
              <div className="profile-card-info">
                <div className="profile-card-info-heading">
                  Thông tin cá nhân
                </div>
                <div className="profile-card-info-wrapper">
                  <div className="profile-card-info-label">Giới tính</div>
                  <div className="profile-card-info-content">
                    {userState?.gender}
                  </div>
                </div>
                <div className="profile-card-info-wrapper">
                  <div className="profile-card-info-label">Ngày sinh</div>
                  <div className="profile-card-info-content">
                    {formattedDate}
                  </div>
                </div>
                <div className="profile-card-info-wrapper">
                  <div className="profile-card-info-label">Điện thoại</div>
                  <div className="profile-card-info-content">
                    {userState.phone}
                  </div>
                </div>
                <span className="profile-card-info-label">
                  Chỉ bạn bè có lưu số máy của bạn trong danh bạ mới xem được số
                  này
                </span>
              </div>
            </>
          ) : (
            <div className="update-profile-form">
              <div className="label-name">Tên hiển thị</div>
              <div className="wrapper-input-update-username">
                <input
                  placeholder={userState.username}
                  className="input-update-username"
                  value={userState.username}
                  onChange={(event) =>event.target.value}
                />
              </div>
              <div className="update-profile-label">Thông tin cá nhân</div>
              <div className="d-flex gap-5 mb-3">
                <div>
                  <input
                    type="radio"
                    id="male"
                    name="gender"
                    value="Nam"
                    checked={selectedGender === "Nam"}
                    onChange={handleGenderChange}
                  />
                  <label className="label-radio">Nam</label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="html"
                    name="gender"
                    value="Nữ"
                    checked={selectedGender === "Nữ"}
                    onChange={handleGenderChange}
                  />
                  <label className="label-radio">Nữ</label>
                </div>
              </div>
              <div className="label-name">Ngày sinh</div>
              <input
                type="date"
                className="my-3"
                value={dateOfBirth}
                onChange={handleDateChange}
              />
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          {stateOption === false ? (
            <div
              className="profile-card-btn-update profile-card-modal-footer"
              onClick={handleOpenUpdate}
            >
              <div className="profile-btn-update-icon">
                <LuPencilLine className="icon-img" />
              </div>
              Cập nhật
            </div>
          ) : (
            <div className="footer-update-profile gap-2">
              <Button variant="secondary" onClick={handleClose}>
                Hủy
              </Button>
              <Button variant="primary" onClick={handleClose}>
                Cập nhật
              </Button>
            </div>
          )}
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalProfileDetail;
