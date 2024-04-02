import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { MdCameraAlt } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";

function ModalAddGroup() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="add-icon" onClick={handleShow}>
        <AiOutlineUsergroupAdd className="add-icon-img" />
      </div>

      <Modal show={show} onHide={handleClose} className="modal-add-friend">
        <Modal.Header closeButton>
          <Modal.Title className="label-add-contact">Tạo nhóm</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container-create-group">
            <div className="create-group-avatar">
              <MdCameraAlt className="create-group-avatar-img" />
            </div>
            <div className="create-group-name">
              <input placeholder="Số điện thoại" className="input-in-modal" />
            </div>
          </div>
          <div className="search-contact-container">
            <div className="search-contact-icon">
              <IoSearchOutline className="search-contact-icon-img" />
            </div>
            <input
              placeholder="Nhập tên, số điện thoại hoặc danh sách số điện thoại"
              className="search-contact-input"
            />
          </div>
          <div className="group-creator">
            <div className="cg-tag selected">Tất cả</div>
            <div className="cg-tag">Khách hàng</div>
            <div className="cg-tag">Gia đình</div>
            <div className="cg-tag">Công việc</div>
            <div className="cg-tag">Bạn bè</div>
          </div>
          <div className="to-add-group">
            <div className="to-add-group-label">Trò chuyện gần đây</div>
            <div className="contact-to-add-group">
              <input type="checkbox" />
              <div className="chat-avatar avatar-to-add-group">
                <img
                  src="https://s120-ava-talk.zadn.vn/4/4/a/2/1/120/9207b2750ba3206d04791ae71ad00a1e.jpg"
                  alt=""
                  className="chat-avatar-img"
                />
              </div>
              <div className="name-contact-to-add-group">Nguyễn Văn A</div>
            </div>
            <div className="contact-to-add-group">
              <input type="checkbox" />
              <div className="chat-avatar avatar-to-add-group">
                <img
                  src="https://s120-ava-talk.zadn.vn/4/4/a/2/1/120/9207b2750ba3206d04791ae71ad00a1e.jpg"
                  alt=""
                  className="chat-avatar-img"
                />
              </div>
              <div className="name-contact-to-add-group">Nguyễn Văn A</div>
            </div>
            <div className="contact-to-add-group">
              <input type="checkbox" />
              <div className="chat-avatar avatar-to-add-group">
                <img
                  src="https://s120-ava-talk.zadn.vn/4/4/a/2/1/120/9207b2750ba3206d04791ae71ad00a1e.jpg"
                  alt=""
                  className="chat-avatar-img"
                />
              </div>
              <div className="name-contact-to-add-group">Nguyễn Văn A</div>
            </div>
            
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Hủy
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Tạo nhóm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalAddGroup;
