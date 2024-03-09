import axios from "axios";

const API_URL = "http://localhost:3002/api/users";

export const getProgress = async (userId) => {
  return axios.get(`${API_URL}/profile/${userId}/progress`);
};
