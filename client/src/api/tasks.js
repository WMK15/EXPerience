import axios from "axios";

const API_URL = "http://localhost:3002/api/tasks";

export const getTasks = async (userId) => {
  return axios.get(`${API_URL}/${userId}`);
};

export const createTask = async (task) => {
  return axios
    .post(`${API_URL}/create`, task, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => response.data);
};
