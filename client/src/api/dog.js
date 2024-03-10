import axios from "axios";

const API_URL = "http://localhost:3002/api/dog";

export const getDog = async (userId) => {
  return axios.get(`${API_URL}/${userId}`);
};

export const updateDog = async (userId, dog) => {
  return axios.put(`${API_URL}/${userId}`, dog, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};
