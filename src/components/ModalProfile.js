import React from "react";
import ModalProfileDetail from "./ModalProfileDetail";
import { useSelector } from "react-redux";
import ModalLogout from "./ModalLogout";

function ModalProfile({ handleCloseModalProfile, handleCloseSettingModal }) {
  // const profileRef = useRef(null);

  // useEffect(() => {
  //   const handleClickOutside = (event) => {
  //     if (profileRef.current && !profileRef.current.contains(event.target)) {

  //       handleCloseModalProfile();
  //     }
  //   };

  //   document.addEventListener("mousedown", handleClickOutside);

  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   };
  // }, [handleCloseModalProfile]);

  // ref={profileRef}

  const userState = useSelector(
    (state) => state?.user?.user?.user || state?.user?.user
  );

  return (
    <div className="modal-profile">
      <div className="profile-name">{userState?.username}</div>
      <ModalProfileDetail handleCloseModalProfile={handleCloseModalProfile} />
      <div className="profile-item ">Cài đặt</div>
      {/* <div className="profile-item profile-logout">Đăng xuất</div> */}
      <ModalLogout
        handleCloseModalProfile={handleCloseModalProfile}
        handleCloseSettingModal={handleCloseSettingModal}
      />
    </div>
  );
}

export default ModalProfile;
