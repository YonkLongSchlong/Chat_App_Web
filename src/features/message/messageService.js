import axios from "axios";
import { base_url } from "../../utils/base_url";
import { config } from "../../utils/axiosconfig";


const sendMessage = async (receiverId, message) => {
  const response = await axios.post(
    `${base_url}messages/send/${receiverId}`,
    { receiverId, message },
    config
  );
  return response.data;
};

const getAllMessages = async (id) => {
  const response = await axios.get(
    `${base_url}messages/${id}`,
    config
  );
  return response.data;
};

const getAllConversations = async (id) => {
  const response = await axios.get(
    `${base_url}messages/conversations/${id}`,
    config
  );
  return response.data;
};

const messageService = {
  sendMessage,
  getAllMessages,
  getAllConversations
};
export default messageService;
