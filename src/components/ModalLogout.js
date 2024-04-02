import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function ModalLogout({ handleCloseSettingModal }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => {
    console.log("handleShow is called")
    handleCloseSettingModal(); // Đóng ModalSetting
    setShow(true);
  };
  return (
    <>
      <div className=" setting-item label-logout" onClick={handleShow}>
        Đăng xuất
      </div>

      <Modal show={show} onHide={handleClose} className="modal-logout">
        <Modal.Header closeButton>
          <Modal.Title className="label-add-contact">Xác nhận</Modal.Title>
        </Modal.Header>
        <Modal.Body className="body-modal-logout">
          <div className="body-modal-logout-ask">
            Bạn có muốn đăng xuất khỏi zalo
          </div>
          <div className="body-modal-logout-option">
            <input type="checkbox" />
            <div>Xóa lịch sử trò chuyện khi đăng xuất</div>
          </div>
        </Modal.Body>
        <Modal.Footer className="footer-modal-logout">
          <Button variant="secondary" onClick={handleClose}>
            Không
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Đăng xuất
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalLogout;
