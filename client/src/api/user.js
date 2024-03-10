import axios from "axios";

const API_URL = "http://localhost:3002/api/profile";

export const getUser = async (userId) => {
  return axios.get(`${API_URL}/${userId}`);
};

export const updateUser = async (userId, user) => {
  return axios.put(`${API_URL}/${userId}`, user, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};
