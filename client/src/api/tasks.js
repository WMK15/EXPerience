import axios from "axios";

const API_URL = "http://localhost:3002/api/tasks";

export const getAllTasks = async (userId) => {
  return axios.get(`${API_URL}/${userId}`);
};
export const createTask = async (task) => {
  console.log(task);
  return axios
    .post(`${API_URL}/create`, task, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => response.data);
};

export const updateTask = async (taskId, task) => {
  return axios.put(`${API_URL}/${taskId}`, task, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};
