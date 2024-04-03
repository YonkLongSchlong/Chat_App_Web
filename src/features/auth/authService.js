import axios from "axios";
import { base_url } from "../../utils/base_url";
import { config } from "../../utils/axiosconfig";

const register = async (user) => {
  const response = await axios.post(`${base_url}auth/register`, user);
  return response.data;
};

const verifyRegister = async (user) => {
  const response = await axios.post(`${base_url}auth/verifyRegister`, user);
  return response.data;
};

const login = async (user) => {
  const response = await axios.post(`${base_url}auth/login`, user);
  if (response.data) {
    localStorage.setItem("User", JSON.stringify(response.data));
  }
  return response.data;
};

const logout = async () => {
  const response = await axios.post(`${base_url}auth/register`, config);
  return response.data;
};

const authService = {
  verifyRegister,
  register,
  login,
  logout,
};
export default authService;
