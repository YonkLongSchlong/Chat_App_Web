import axios from "axios";
import { base_url } from "../../utils/base_url";
import { config } from "../../utils/axiosconfig";

const getUsers = async () => {
  const response = await axios.get(`${base_url}user`, config);
  return response.data;
};

const getaUser = async (id) => {
  const response = await axios.get(`${base_url}user/find/${id}`, config);
  return response.data;
};

const updateProfile = async (user) => {
  const response = await axios.patch(
    `${base_url}user/${user.id}/profile`,
    {
      username: user.userData.username,
      gender: user.userData.gender,
      dob: user.userData.dob,
    },
    config
  );
  if (response.data) {
    localStorage.setItem("User", JSON.stringify(response.data));
  }
  return response.data;
};

const uploadAvatar = async (id, file ) => {
  const formData = new FormData();
  formData.append('image', file);
  const response = await axios.patch(
    `${base_url}user/${id}/avatar`,
    formData,
    config
  );
  return response.data;
};

const userService = {
  getUsers,
  getaUser,
  updateProfile,
  uploadAvatar
};
export default userService;
