import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { AiOutlineUserAdd } from "react-icons/ai";
import { FaFlagCheckered } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { AiOutlineFieldTime } from "react-icons/ai";

function ModalAddFriend() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="add-icon" onClick={handleShow}>
        <AiOutlineUserAdd className="add-icon-img" />
      </div>

      <Modal show={show} onHide={handleClose} className="modal-add-friend">
        <Modal.Header closeButton>
          <Modal.Title className="label-add-contact">Thêm bạn</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="find-friend">
            <div className="regions">
              <FaFlagCheckered />
              <span>(+84)</span>
              <IoMdArrowDropdown />
            </div>
            <div className="input-add-contact">
              <input
                placeholder="Số điện thoại"
                className="input-in-modal"
              />
            </div>
          </div>
          <span>
            <AiOutlineFieldTime className="icon-inner" />
            <span className="text-inner">Có thể bạn quen</span>
          </span>
          <div>
            <div className="another-contact-container">
              <div className="chat-avatar">
                <img
                  src="https://s120-ava-talk.zadn.vn/4/4/a/2/1/120/9207b2750ba3206d04791ae71ad00a1e.jpg"
                  alt=""
                  className="chat-avatar-img"
                />
              </div>
              <div className="another-contact">
                <div className="another-contact-name">Trần Văn Bình</div>
                <div className="another-contact-description">
                  Từ gợi ý kết bạn
                </div>
              </div>
              <button className="btn-add-friend-in-modal">Kết bạn</button>
            </div>
            <div className="another-contact-container">
              <div className="chat-avatar">
                <img
                  src="https://s120-ava-talk.zadn.vn/4/4/a/2/1/120/9207b2750ba3206d04791ae71ad00a1e.jpg"
                  alt=""
                  className="chat-avatar-img"
                />
              </div>
              <div className="another-contact">
                <div className="another-contact-name">Trần Văn Bình</div>
                <div className="another-contact-description">
                  Từ gợi ý kết bạn
                </div>
              </div>
              <button className="btn-add-friend-in-modal">Kết bạn</button>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Hủy
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Tìm kiếm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalAddFriend;
